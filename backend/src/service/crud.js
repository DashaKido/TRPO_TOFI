const repository = require("../repository/crud");
const { getRandomIdea } = require("./dateIdeas");
const { logger } = require("./logger");

const getAll = async (req, res) => {
  const { collection } = req.params;
  const { token } = req.headers;
  const user = (
    await (await repository.getMe(token, req.app.locals.db)).toArray()
  )[0];
  console.log(token);
  console.log(user);

  const results = await repository.getAll(
    user.roles?.includes("admin"),
    collection,
    req.app.locals.db,
    token
  );

  res.status(200).send(results);
};

const getById = async (req, res) => {
  const { collection, id } = req.params;
  const { token } = req.headers;
  const user = (
    await (await repository.getMe(token, req.app.locals.db)).toArray()
  )[0];

  const result = await repository.getById(
    user.roles?.includes("admin"),
    collection,
    id,
    req.app.locals.db,
    token
  );

  res.status(200).send(result);
};

const updateById = async (req, res) => {
  const { collection, id } = req.params;
  const { body } = req;
  const { token } = req.headers;
  const user = (
    await (await repository.getMe(token, req.app.locals.db)).toArray()
  )[0];

  const updated = await repository.updateEntity(
    user.roles.includes("admin"),
    collection,
    id,
    body,
    req.app.locals.db,
    token
  );

  res.status(200).send(updated);
};

const deleteEntity = async (req, res) => {
  const { collection, id } = req.params;
  const { token } = req.headers;
  const user = (
    await (await repository.getMe(token, req.app.locals.db)).toArray()
  )[0];

  try {
    await repository.deleteEntity(
      user.roles?.includes("admin"),
      collection,
      id,
      req.app.locals.db,
      token
    );
    res.status(200);
  } catch (e) {
    logger.error(e.stack);
    res.status(400).send(400);
  }
};

const generateLeisure = async (req, res) => {
  const { db } = req.app.locals;
  const { token } = req.headers;

  const randomDate = getRandomIdea();
  const newLeisure = await db
    .collection("Leisure")
    .insertOne({ randomDate, token }, { new: true });
  res.status(200).send(newLeisure);
};

const create = async (req, res) => {
  const { collection } = req.params;
  const { body } = req;
  const { token } = req.headers;
  const user = (
    await (await repository.getMe(token, req.app.locals.db)).toArray()
  )[0];

  const created = await repository.create(
    user.roles?.includes("admin"),
    collection,
    body,
    req.app.locals.db,
    token
  );

  res.status(200).send(created);
};

const getMe = async (req, res) => {
  const { token } = req.headers;

  const me = await repository.getMe(token, req.app.locals.db);

  res.status(200).send((await me.toArray())[0]);
};

module.exports = {
  getMe,
  getAll,
  getById,
  updateById,
  deleteEntity,
  create,
  generateLeisure,
};
