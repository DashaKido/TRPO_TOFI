const moment = require("moment");
const cron = require("node-cron");
const fs = require("fs");

const runStatistics = async (db) => {
  const oldLog = (
    await (await db.collection("Statistics").find()).toArray()
  )[0];
  if (oldLog) await db.collection("Statistics").deleteOne({ _id: oldLog._id });

  const groupedLogs = (
    await db
      .collection("Logs")
      .aggregate([
        {
          $lookup: {
            from: "User",
            localField: "token",
            foreignField: "token",
            as: "user",
          },
        },
      ])
      .sort({ action: 1 })
      .toArray()
  )
    .filter((e) => !e.action.includes("Админ"))
    .reduce((acc, cur) => {
      if (cur.user[0]) {
        if (
          acc[cur.user[0]._id] &&
          acc[cur.user[0]._id].actions &&
          acc[cur.user[0]._id].actions[cur.action]
        )
          acc[cur.user[0]._id].actions[cur.action] += 1;
        else {
          acc[cur.user[0]._id] = {
            actions: {
              ...(acc[cur.user[0]._id]?.actions || []),
              [cur.action]: 1,
            },
          };
        }
      }
      return acc;
    }, {});
  await db.collection("Statistics").insertOne({
    time: moment().format("DD-MM-YYYY HH:mm"),
    actions: groupedLogs,
  });
  console.log(
    JSON.stringify({
      time: moment().format("DD-MM-YYYY HH:mm"),
      actions: groupedLogs,
    })
  );
  await fs.appendFile(
    "stats.log",
    JSON.stringify({
      time: moment().format("DD-MM-YYYY HH:mm"),
      actions: groupedLogs,
    }) + "\n",
    (err) => {
      err ? console.log(err) : () => {};
    }
  );
};

module.exports = {
  runStatistics,
};
