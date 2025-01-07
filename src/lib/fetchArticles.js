// src/lib/fetchArticles.js

import RSSParser from 'rss-parser';
import { cleanAndTruncateText } from './cleanText';
import { isAIRelated } from './cleanText';

// RSS Feed URLs and names directly defined here
const rssFeeds = [
    {
        name: 'TechCrunch',
        url: 'https://techcrunch.com/feed/',
    },
    {
        name: 'VentureBeat',
        url: 'https://venturebeat.com/feed/',
    },
    // Add more RSS feeds here as needed
];

const parser = new RSSParser();

/**
 * Fetches and parses articles from multiple RSS feeds
 * @returns {Promise<Array>} Array of parsed articles
 */
async function fetchArticlesFromRSS() {
    try {
        const allArticles = [];
        
        for (const feed of rssFeeds) {
            console.log(`Fetching articles from ${feed.name}...`);
            const parsedFeed = await parser.parseURL(feed.url);
            
            // Filter for AI-related articles and clean content
            const articles = parsedFeed.items
                .map((article) => ({
                    title: article.title,
                    description: cleanAndTruncateText(article.contentSnippet || '', 40),
                    content: cleanAndTruncateText(article.content || '', 40),
                    pubDate: new Date(article.pubDate),
                    newsOutlet: feed.name,
                    link: article.link,
                    author: article.creator || article.author || 'Unknown',
                    category: article.categories?.[0] || 'Technology',
                }))
                .filter(isAIRelated)
                .slice(0, 10); // Limit to 10 articles per outlet
            
            allArticles.push(...articles);
        }
        
        return allArticles;
    } catch (error) {
        console.error('Error fetching or parsing RSS feeds:', error);
        return [];
    }
}

export default fetchArticlesFromRSS;