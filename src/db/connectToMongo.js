// src/db/connectToMongo.js
import { MongoClient } from 'mongodb';

const mongoUri = 'mongodb://localhost:27017';
const dbName = 'rssAppDB';

let cachedDb = null;

export async function connectToMongo() {
    if (cachedDb) return cachedDb;

    const client = new MongoClient(mongoUri);
    await client.connect();
    console.log('Connected to MongoDB');
    cachedDb = client.db(dbName);
    return cachedDb;
}
