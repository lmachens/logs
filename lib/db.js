const { MongoClient } = require("mongodb");

let db = null;
const connectDB = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
  });

  db = client.db(process.env.MONGODB_NAME);
};

const close = () => {
  return db.close();
};

const getCollection = (name) => {
  return db.collection(name);
};

exports.connectDB = connectDB;
exports.close = close;
exports.getCollection = getCollection;
