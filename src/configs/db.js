const { MongoClient } = require("mongodb");

// const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:27017/${process.env.DATABASE}?maxPoolSize=2-&w=majority`;
const uri = "mongodb://localhost:27017"

const client = new MongoClient(uri);

const init = async () => {
  try {
    await client.connect();
    console.log("Connected to mongodb database successfully...!");
  } catch (error) {
    console.log(error);
  }
};

const getClient = () => {
  return client;
};

module.exports.init = init;
module.exports.getClient = getClient;