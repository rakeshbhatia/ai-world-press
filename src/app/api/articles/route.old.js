// src/app/api/articles/route.js

import { NextResponse } from 'next/server';
import { connectToMongo } from '@/db/connectToMongo';

export async function GET() {
    const db = await connectToMongo();
    const articles = await db.collection('articles').find({}).toArray();
    return NextResponse.json(articles);
}
