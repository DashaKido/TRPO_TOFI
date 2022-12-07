const { ObjectId } = require("mongodb");
const { logger } = require("../service/logger");

const getAll = async (collection, db, token) => {
  try {
    const entities = await db.collection(collection).find({token}).toArray();

    return entities;
  } catch (e) {
    logger.error(e.stack);
  }
};

const getById = async (collection, _id, db, token) => {
  try {
    const entities = await db
      .collection(collection)
      .findMany({ _id: new ObjectId(_id) });

    return entities;
  } catch (e) {
    logger.error(e.stack);
  }
};

const create = async (collection, body, db, token) => {
  try {
    const createdEntity = await db
      .collection(collection)
      .insertOne({...body, token}, { new: true });

    return createdEntity;
  } catch (e) {
    logger.error(e.stack);
  }
};

const deleteEntity = async (collection, _id, db, token) => {
  try {
    await db
      .collection(collection)
      .deleteOne({ _id: new ObjectId(_id) });
  } catch (e) {
    logger.error(e.stack);
  }
};

const updateEntity = async (collection, id, body, db, token) => {
  console.log(collection);
  try {
    const updated = await db
      .collection(collection)
      .findOneAndUpdate(
        { _id: new ObjectId(id), token },
        { $set: body },
        { returnDocument: "after" }
      );

    return updated.value;
  } catch (e) {
    logger.error(e.stack);
  }
};

const getMe = async (token, db) => {
  try {
    const me = await db.collection("User").find({ token });

    return me;
  } catch (e) {
    logger.error(e.stack);
  }
};

module.exports = {
  getMe,
  getAll,
  getById,
  create,
  deleteEntity,
  updateEntity,
};
