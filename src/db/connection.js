// src/db/connection.js

import mongoose from 'mongoose';

// MongoDB URI taken from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Ensure the MongoDB URI is defined
if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

// Cache the MongoDB connection to reuse it across multiple requests
let cached = global.mongoose;

// If no cached connection exists, initialize one
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Establishes and manages the connection to MongoDB
 * Uses connection pooling to reuse connections across requests
 * @returns {Promise<typeof mongoose>} A promise that resolves to the Mongoose instance
 */
async function connectToDatabase() {
    // If there's already an active connection, return it
    if (cached.conn) {
        console.log('Using existing MongoDB connection');
        return cached.conn;
    }

    // If no connection exists but there's a pending connection promise
    if (!cached.promise) {
        console.log('Establishing new MongoDB connection');
        
        // Create a new connection promise
        // Note: Removed deprecated options as they're no longer needed in Mongoose 8.x
        cached.promise = mongoose.connect(MONGODB_URI)
            .then((mongoose) => {
                console.log('MongoDB connected successfully');
                return mongoose;
            })
            .catch((error) => {
                console.error('Error connecting to MongoDB:', error);
                throw error;
            });
    }

    try {
        // Wait for the connection to be established
        cached.conn = await cached.promise;
    } catch (error) {
        // Clear the promise if connection fails
        cached.promise = null;
        console.error('Failed to establish MongoDB connection:', error);
        throw error;
    }

    return cached.conn;
}

// Export the connection function
export default connectToDatabase;