// src/app/api/articles/route.js

import { NextResponse } from 'next/server';
import connectToDatabase from '@/db/connection';
import Article from '@/models/Article';

export async function GET() {
    try {
        // Connect to the database
        await connectToDatabase();

        // Fetch articles from the last 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const articles = await Article.find({
            pubDate: { $gte: thirtyDaysAgo }
        })
            .sort({ pubDate: -1 })
            .limit(5);

        if (!articles.length) {
            console.log('No articles found in database');
            return NextResponse.json({ 
                message: 'No articles found',
                articles: [] 
            });
        }

        return NextResponse.json({
            message: 'Articles fetched successfully',
            articles
        });
    } catch (error) {
        console.error('Error fetching articles:', error);
        return NextResponse.json(
            { 
                message: 'Error fetching articles',
                error: error.message 
            },
            { status: 500 }
        );
    }
}