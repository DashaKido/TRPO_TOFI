const repository = require("../repository/crud");
const { logger } = require("./logger");

const getAll = async (req, res) => {
  const { collection } = req.params;
  const { token } = req.headers;

  const results = await repository.getAll(collection, req.app.locals.db, token);

  res.status(200).send(results);
};

const getById = async (req, res) => {
  const { collection, id } = req.params;
  const { token } = req.headers;

  const result = await repository.getById(collection, id, req.app.locals.db, token);

  res.status(200).send(result);
};

const updateById = async (req, res) => {
  const { collection, id } = req.params;
  const { body } = req;
  const { token } = req.headers;

  const updated = await repository.updateEntity(
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

  try {
    await repository.deleteEntity(collection, id, req.app.locals.db, token);
    res.status(200);
  } catch (e) {
    logger.error(e.stack);
    res.status(400).send(400);
  }
};
const create = async (req, res) => {
  const { collection } = req.params;
  const { body } = req;
  const { token } = req.headers;

  const created = await repository.create(collection, body, req.app.locals.db, token);

  res.status(200).send(created);
};

const getMe = async (req, res) => {
  const { token } = req.headers;

  const me = await repository.getMe(token, req.app.locals.db);

  console.log();

  res.status(200).send((await me.toArray())[0]);
};

module.exports = {
  getMe,
  getAll,
  getById,
  updateById,
  deleteEntity,
  create,
};
