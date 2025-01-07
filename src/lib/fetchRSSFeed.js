// src/lib/fetchRSSFeed.js

import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';

export async function fetchRSSFeed(url) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        const result = await parseStringPromise(text);

        if (result.rss?.channel) {
            return result.rss.channel[0].item || [];
        }
        if (result.feed?.entry) {
            return result.feed.entry || [];
        }
        throw new Error('Invalid RSS or Atom format');
    } catch (error) {
        console.error('Error fetching RSS feed:', error);
        return [];
    }
}