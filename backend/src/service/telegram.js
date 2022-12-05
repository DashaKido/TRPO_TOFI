const TelegramBot = require("node-telegram-bot-api");
const crypto = require("crypto");
const { default: axios } = require("axios");
const cron = require("node-cron");

function getBase64(url) {
  return axios
    .get(url, {
      responseType: "arraybuffer",
    })
    .then((response) => Buffer.from(response.data, "binary"));
}

const onStart = (db) => {
  const bot = new TelegramBot(process.env.TG_BOT_TOKEN, { polling: true });

  bot.setMyCommands([
    {
      command: "start",
      description:
        "Start using service by receiving the token and following the provided link",
    },
    {
      command: "add_person",
      description:
        'Add a new person in your person list by providing the data like this "/add_person name=<person_name>"',
    },
    {
      command: "my_persons",
      description: "View your persons",
    },
    {
      command: "person",
      description:
        'View a specific information about your person by providing the following command "/person <person_name>"',
    },
  ]);

  bot.onText(/\/start/, async (msg, match) => {
    const chatId = msg.chat.id;
    const token = crypto.randomUUID();
    await db
      .collection("User")
      .insertOne({ chatId, token, isPro: false, name: msg.chat.first_name });

    const stringToSend = `Hello, thanks for starting using our service, here is your token ${token}`;
    bot.sendMessage(chatId, stringToSend);
  });

  bot.onText(/\/my_persons/, async (msg, match) => {
    const chatId = msg.chat.id;
    const persons = (await db.collection("User").findOne({ chatId })).persons;
    const personsInfo = (
      await Promise.all(
        persons.map(async (personId) => {
          let person = await db.collection("Person").findOne({ _id: personId });
          console.log(person);
          return person;
        })
      )
    )
      .map((person) =>
        Object.keys(person)
          .filter((key) => key !== "_id")
          .reduce((curr, acc) => (curr += `${acc}: ${person[acc]} \n`), "")
      )
      .join("           ---------------------           \n");
    bot.sendMessage(chatId, personsInfo);
  });

  bot.onText(/\/add_person (.*)/, async (msg, match) => {
    const id = msg.chat.id;
    try {
      const personInfo = msg.text
        .split("/add_person ")[1]
        .split(" ")
        .reduce(
          (curr, acc) => ({ ...curr, [acc.split("=")[0]]: acc.split("=")[1] }),
          {}
        );
      const person = await db
        .collection("Person")
        .insertOne(personInfo, { new: true });
      await db
        .collection("User")
        .findOneAndUpdate(
          { chatId: msg.chat.id },
          { $push: { persons: person.insertedId } }
        );

      bot.sendMessage(
        id,
        "Successfull, you can see your persons by clicking this..."
      );
    } catch (e) {
      console.log(e);
      bot.sendMessage(id, "Something went wrong...");
    }
  });

  bot.onText(/\/set_me (.*)/, async (msg, match) => {
    const id = msg.chat.id;
    try {
      const user = db.collection("User").findOne({ chatId: msg.chat.id });

      if (user) {
        throw new Error('First sign up <a href="command">/start</a>');
      }

      const personInfo = msg.text
        .split("/set_me ")[1]
        .split(" ")
        .reduce(
          (curr, acc) => ({ ...curr, [acc.split("=")[0]]: acc.split("=")[1] }),
          {}
        );
      await db
        .collection("User")
        .findOneAndUpdate(
          { chatId: msg.chat.id },
          { $set: personInfo },
          { new: true }
        );

      bot.sendMessage(
        id,
        "Successfull, you can see your persons by clicking this..."
      );
    } catch (e) {
      console.log(e);
      bot.sendMessage(id, e.message, {
        parse_mode: "Markdown",
      });
    }
  });

  bot.onText(/\/person (.*)/, async (msg, match) => {
    const [firstName, lastName] = msg.text.split("/person ").split(" ");
    const user = db.collection("User").findOne({ chatId: msg.chat.id });
    const foundPersonByName = await db
      .collection("Person")
      .findOne({ firstName, lastName });
    if (user.persons.includes(foundPersonByName._id)) {
      bot.sendMessage(
        msg.chat.id,
        Object.keys(person)
          .filter((key) => key !== "_id")
          .reduce((curr, acc) => (curr += `${acc}: ${person[acc]} \n`), "")
      );
    }
  });

  bot.onText(/\/events/, async (msg, match) => {});
  bot.onText(/\/event (.*)/, async (msg, match) => {});

  bot.onText(/\/upcoming (.*)/, async (msg, match) => {});
  bot.onText(/\/upcoming (.*)/, async (msg, match) => {});

  bot.onText(/\/remind (.*)/, async (msg, match) => {});
  bot.onText(/\/settings (.*)/, async (msg, match) => {
    const id = msg.chat.id;
    const settings = msg.text
      .split("/settings ")[1]
      .split(" ")
      .reduce(
        (curr, acc) => ({ ...curr, [acc.split("=")[0]]: acc.split("=")[1] }),
        {}
      );

    let settingsEntity = await db.collection("Settings").findOne({ id });
    // console.log(Object.keys(settingsEntity).length > 0);
    if (!settingsEntity || Object.keys(settingsEntity).length > 0) {
      await db
        .collection("Settings")
        .findOneAndUpdate({ id }, { $set: settings });
    } else await db.collection("Settings").insertOne({ ...settings, id });

    if (settings.randomCat) {
      const catPhoto = await getBase64("https://cataas.com/cat");
      bot.sendPhoto(id, catPhoto);
      const task = cron.schedule("*/10 * * * *", async () => {
        const catPhoto = await getBase64("https://cataas.com/cat");
        bot.sendPhoto(id, catPhoto);
      });
    } else {
    }

    console.log(settings);
  });
};

module.exports = {
  onStart,
};
