// src/db/connectToMongo.js

import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI; // Add your MongoDB URI in an environment variable
let client;
let clientPromise;

if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export const connectToMongo = async () => {
    const connection = await clientPromise;
    return connection.db(process.env.MONGO_DB_NAME); // Add DB name in environment variables
};
