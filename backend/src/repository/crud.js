const { ObjectId } = require("mongodb");
const { logger } = require("../service/logger");

const getAll = async (collection, db) => {
  try {
    const entities = await db.collection(collection).find({}).toArray();

    return entities;
  } catch (e) {
    logger.error(e);
  }
};

const getById = async (collection, _id, db) => {
  try {
    const entities = await db
      .collection(collection)
      .findMany({ _id: new ObjectId(_id) });

    return entities;
  } catch (e) {
    logger.error(e);
  }
};

const create = async (collection, body, db) => {
  try {
    const createdEntity = await db
      .collection(collection)
      .insertOne(body, { new: true });

    return createdEntity;
  } catch (e) {
    logger.error(e);
  }
};

const deleteEntity = async (collection, _id, db) => {
  try {
    await db.collection(collection).deleteOne({ _id: new ObjectId(_id) });
  } catch (e) {
    logger.error(e);
  }
};

const updateEntity = async (collection, id, body, db) => {
  console.log(collection);
  try {
    console.log(
      await db.collection(collection).findOne({ _id: new ObjectId(id) })
    );
    const updated = await db
      .collection(collection)
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: body },
        { returnDocument: "after" }
      );

    return updated.value;
  } catch (e) {
    logger.error(e);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  deleteEntity,
  updateEntity,
};
