const { MongoClient } = require('mongodb');
const { dbUrl, dbName } = require('../config/config');

async function connectToDatabase() {
  try {
    const client = new MongoClient(dbUrl, { useUnifiedTopology: true });
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    console.log(`Using database: ${dbName}`);

    return db;
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
}

module.exports = connectToDatabase;
