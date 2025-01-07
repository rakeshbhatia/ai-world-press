// src/app/api/fetch-articles/route.js

import { NextResponse } from 'next/server';
import storeArticles from '@/lib/storeArticles';

export async function GET() {
    try {
        await storeArticles();
        return NextResponse.json({ message: 'Articles fetched and stored successfully' });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}