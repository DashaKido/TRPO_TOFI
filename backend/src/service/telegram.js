const TelegramBot = require("node-telegram-bot-api");
const crypto = require("crypto");
const { default: axios } = require("axios");
const cron = require("node-cron");
const moment = require("moment");

const frontURL = "test";

function getBase64(url) {
  return axios
    .get(url, {
      responseType: "arraybuffer",
    })
    .then((response) => Buffer.from(response.data, "binary"));
}

//TODO ADD NOTES (add, show, delete) TODO (show)

const onStart = (db) => {
  const bot = new TelegramBot(process.env.TG_BOT_TOKEN, { polling: true });

  bot.setMyCommands([
    {
      command: "start",
      description:
        "Start using service by receiving the token and following the provided link",
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
    {
      command: "upcoming_events",
      description: "Retrieve all upcoming events",
    },
    {
      command: "token",
      description: "Retrieve your personal token to access the website",
    },
  ]);

  bot.onText(/\/token/, async (msg, match) => {
    const chatId = msg.chat.id;

    const user = await db.collection("User").findOne({ chatId });

    if (user) {
      bot.sendMessage(
        chatId,
        `Here is your token that you can use to access the site (${frontURL}): ${user.token},`
      );
    }
  });

  bot.onText(/\/start/, async (msg, match) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const user = await db.collection("User").findOne({ chatId });
    const { file_id } = (await bot.getUserProfilePhotos(userId)).photos[0][0];
    let fileLink = "";
    if (file_id) {
      fileLink = await bot.getFileLink(file_id);
    }
    if (!user) {
      const token = crypto.randomUUID();
      await db.collection("User").insertOne({
        chatId,
        token,
        isPro: false,
        name: msg.chat.first_name,
        roles: ["client"],
        fileLink,
      });

      const stringToSend = `Hello, thanks for starting using our service, here is your token ${token}, website: ${frontURL}`;
      bot.sendMessage(chatId, stringToSend);
    } else
      bot.sendMessage(
        chatId,
        `Hello, you have already registered, here is your token: ${user.token}`
      );
  });

  bot.onText(/\/my_persons/, async (msg, match) => {
    const chatId = msg.chat.id;
    const userToken = (await db.collection("User").findOne({ chatId })).token;
    let persons = await (
      await db.collection("Person").find({ token: userToken })
    ).toArray();
    let personsInfo = [];
    if (persons && persons.length) {
      personsInfo = persons
        .map((person) =>
          Object.keys(person)
            .filter((key) => key !== "_id" && key !== "token" && key !== "info")
            .reduce((curr, acc) => (curr += `${acc}: ${person[acc]} \n`), "")
        )
        .join("           ---------------------           \n");
    }

    if (personsInfo.length) {
      bot.sendMessage(chatId, personsInfo);
    } else
      bot.sendMessage(
        chatId,
        `Seems like you haven't added any persons yet, try to do it in your account (${frontURL})`
      );
  });

  bot.onText(/\/person (.*)/, async (msg, match) => {
    const [name, lastName] = msg.text.split("/person ")[1].split(" ");
    const user = await db.collection("User").findOne({ chatId: msg.chat.id });
    const foundPersonByName = (
      await (
        await db.collection("Person").find({
          $or: [
            { name: { $in: [name, lastName] } },
            { lastName: { $in: [name, lastName] } },
          ],
          token: user.token,
        })
      ).toArray()
    )[0];
    if (!foundPersonByName) {
      bot.sendMessage(
        msg.chat.id,
        "No persons were found via your query, try to follow this scheme /person <name> <lastname>"
      );
    } else
      bot.sendMessage(
        msg.chat.id,
        Object.keys(foundPersonByName)
          .filter((key) => key !== "_id" && key !== "token")
          .reduce((curr, acc) => {
            if (acc === "info") {
              return (curr +=
                "Additional Info: " +
                foundPersonByName[acc]
                  .map((personInfo) => `${personInfo.text}: ${personInfo.main}`)
                  .join(". "));
            } else return (curr += `${acc}: ${foundPersonByName[acc]} \n`);
          }, "")
      );
  });

  bot.onText(/\/events/, async (msg, match) => {
    const chatId = msg.chat.id;
    const { token } = await db
      .collection("User")
      .findOne({ chatId: msg.chat.id });

    const events = await (
      await db.collection("Event").find({ token })
    ).toArray();
    console.log(events);
    console.log(
      events
        .sort((a, b) => moment(a.startDate).unix() - moment(b.startDate).unix())
        .filter((event) => moment(event.startDate).isAfter(moment()))
    );
  });

  bot.onText(/\/upcoming_events/, async (msg, match) => {
    const chatId = msg.chat.id;
    const { token } = await db
      .collection("User")
      .findOne({ chatId: msg.chat.id });

    const events = await (
      await db.collection("Event").find({ token })
    ).toArray();
    if (events) {
      const sortedEvents = events
        .sort((a, b) => moment(a.startDate).unix() - moment(b.startDate).unix())
        .filter((event) => moment(event.startDate).isAfter(moment()));
      const eventsString = (
        await Promise.all(
          sortedEvents.map(async (event) => {
            console.log(moment(event).format("DD.MM.YYYY"));
            let strToReturn = `${event.title} - importance ${
              event.importance
            } - date ${moment(event.startDate).format("DD.MM.YYYY")} `;
            console.log("event", event);
            if (event.person) {
              let person = await db
                .collection("Person")
                .findOne({ _id: event.person });
              console.log("event person", person);
              if (person) {
                strToReturn += `with: ${person.name} ${person.lastName}`;
              }
            }

            return strToReturn;
          })
        )
      ).join("\n\n-----------------------------------------\n\n");
      // console.log(eventsString);
      bot.sendMessage(chatId, eventsString);
    } else bot.sendMessage(chatId, "Sorry, no events for you...");
  });

  bot.onText(/\/add_reminder (.*)/, async (msg, match) => {
    const {
      text,
      chat: { id: chatId },
    } = msg;
    const { token } = await db
      .collection("User")
      .findOne({ chatId: msg.chat.id });
    let [note, time] = text?.split("/add_reminder ")[1].split(" ");
    if (note && time) {
      let [hours, mins] = time.split(":");
      const now = moment();
      await db.collection("Reminders_history").insertOne({
        note,
        time: `${moment().format("DD.MM.YYYY")}-${time}`,
        chatId,
        token,
      });
      let job = cron.schedule(
        `0 ${mins} ${hours} ${now.date()} ${now.month() + 1} *`,
        () => {
          bot.sendMessage(chatId, note);
          job.cancel();
        }
      );
      bot.sendMessage(chatId, "Reminder is successfullt set up");
    } else {
      bot.sendMessage(
        chatId,
        "Missing required parameters, try to follow this scheme /add_reminder note_text time : {HH:mm}"
      );
    }
  });

  bot.onText(/\/passed_reminders/, async (msg, match) => {
    const {
      text,
      chat: { id: chatId },
    } = msg;

    const { token } = await db
      .collection("User")
      .findOne({ chatId: msg.chat.id });
    const passedReminders = await (
      await db.collection("Reminders_history").find({ token })
    ).toArray();

    const parsedReminders = passedReminders
      .map((reminder) => `${reminder.time}: ${reminder.note}`)
      .join("\n\n-----------------------------------------\n\n");
    bot.sendMessage(chatId, parsedReminders);
  });

  bot.onText(/\/todos/, async (msg, match) => {
    const {
      text,
      chat: { id: chatId },
    } = msg;

    const { token } = await db
      .collection("User")
      .findOne({ chatId: msg.chat.id });
    const userTODOS = await (
      await db.collection("ToDo").find({ token })
    ).toArray();
    console.log(userTODOS);
  });
};

module.exports = {
  onStart,
};
