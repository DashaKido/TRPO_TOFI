const repository = require("../repository/crud");
const { logger } = require("./logger");

const getAll = async (req, res) => {
  const { collection } = req.params;

  const results = await repository.getAll(collection, req.app.locals.db);

  res.status(200).send(results);
};

const getById = async (req, res) => {
  const { collection, id } = req.params;

  const result = await repository.getById(collection, id, req.app.locals.db);

  res.status(200).send(result);
};

const updateById = async (req, res) => {
  console.log("here");
  const { collection, id } = req.params;
  const { body } = req;

  const updated = await repository.updateEntity(
    collection,
    id,
    body,
    req.app.locals.db
  );

  res.status(200).send(updated);
};

const deleteEntity = async (req, res) => {
  const { collection, id } = req.params;

  try {
    await repository.deleteEntity(collection, id, req.app.locals.db);
    res.status(200);
  } catch (e) {
    logger.error(e);
    res.status(400).send(400);
  }
};
const create = async (req, res) => {
  const { collection } = req.params;
  const { body } = req;

  const created = repository.create(collection, body, req.app.locals.db);

  res.status(200).send(created);
};

module.exports = {
  getAll,
  getById,
  updateById,
  deleteEntity,
  create,
};
