const { ObjectID, ObjectId } = require("bson");
const { Db } = require("mongodb");
const client = require("./db");

const runMigration = async () => {
  await client.db("trpotofi").createCollection("User", {
    name: { type: String },
    lastName: { type: String },
    birth: { type: String },
    isPro: { type: Boolean, require: true },
    firstLogin: { type: Boolean, require: true },
    persons: [{ type: ObjectId, ref: "Person" }],
    events: [{ type: ObjectId, ref: "Event" }],
    token: String,
    chatId: String,
  });

  await client.db("trpotofi").createCollection("Person", {
    category: String,
    nickname: String,
    firstName: String,
    lastName: String,
    birthDate: String,
    meta: Object,
  });

  await client.db("trpotofi").createCollection("Event", {
    friend: { type: ObjectId, ref: "Person" },
    name: String,
    importance: { type: Number, min: 0, max: 10 },
    date: String,
    time: String,
  });

  await client.db("trpotofi").createCollection("Logs", {
    stack: String,
  });

  await client.db("trpotofi").createCollection("Leisure", {
    name: String,
    suggestedTypes: [{ type: String }],
    rate: { type: Number, max: 100 },
  });

  await client.db("trpotofi").createCollection("Settings", {
    user: { type: ObjectId, ref: "User" },
    grettingMessage: { type: String },
    shouldGiveRandomCompliments: Boolean,
  });

  await client.db("trpotofi").createCollection("Subscription", {
    duration: Number,
    meta: Object,
    user: { type: ObjectId, ref: "User" },
  });

  await client.db("trpotofi").createCollection("News", {
    article: String,
    content: String,
    keyWords: [{ type: String }],
  });

  await client.db("trpotofi").createCollection("Payment", {
    processor: String,
    amount: Number,
    currency: String,
    user: { type: ObjectId, ref: "User" },
  });

  await client.db("trpotofi").createCollection("Contract", {
    payments: [{ type: String, ref: "Payment" }],

    subscriptions: [{ type: String, ref: "Subscription" }],
    user: { type: ObjectId, ref: "User" },
  });
};

module.exports = {
  runMigration,
};
