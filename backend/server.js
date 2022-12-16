const app = require("express")();
const moment = require("moment");
const cron = require("node-cron");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const router = require("./src/router/crud");
const client = require("./src/service/db");
// const { logger } = require("./src/service/logger");
// const { runMigration } = require("./src/service/migrations");
const { onStart } = require("./src/service/telegram");
const { runStatistics } = require("./src/service/stats");

dotenv.config();

const host = "localhost";
const port = 7000;

client.connect(process.env.MONGODB_CLUSTER_URI, async (err, database) => {
  const db = database.db("trpotofi");
  app.locals.db = db;
  runStatistics(db);
  cron.schedule("*/5 * * * *", () => runStatistics(db));

  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(cors());

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
