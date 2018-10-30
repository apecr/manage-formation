const databaseSngularFormacion = 'SngularFormacion';
const collectionFormacion = 'eventosFormacion';
const MongoClient = require('mongodb').MongoClient;

const getClient = () => {
  let client = { db: undefined };
  const insideGetClient = async() => {
    if (client.db === undefined) {
      console.log('Calculating client');
      client.db = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
    }
    return client.db;
  };
  return insideGetClient;
};

const getCachedClient = getClient();

const getElements = async() => {
  const client = await getCachedClient();
  const elements = await client
    .db(databaseSngularFormacion)
    .collection(collectionFormacion)
    .find({})
    .toArray();

  return elements;
};

const closeConnection = async() => {
  const client = await getCachedClient();
  return await client.close();
};

module.exports = { getElements, closeConnection };