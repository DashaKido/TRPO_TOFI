const app = require("express")();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const router = require("./src/router/crud");
const client = require("./src/service/db");
const { logger } = require("./src/service/logger");
const { runMigration } = require("./src/service/migrations");
const { onStart } = require("./src/service/telegram");

dotenv.config();

const host = "localhost";
const port = 7000;

client.connect(process.env.MONGODB_CLUSTER_URI, (err, database) => {

  app.locals.db = database.db("trpotofi");

  app.use(bodyParser.json());

  app.use((req, res) => {

    console.log(req.method, decodeURI(req.url), req.body);

    req.next();

  });

  app.use("/api", router);

  app.listen(port, host, function () {

    onStart(database.db("trpotofi"));

    console.log(`Server listens http://${host}:${port}`);

  });
});
