const MongoClient = require("mongodb").MongoClient;
const dotenv = require('dotenv');

dotenv.config();

const client = MongoClient;

module.exports = client;
