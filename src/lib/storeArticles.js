// src/lib/storeArticles.js

import Article from '@/models/Article';
import fetchArticlesFromRSS from './fetchArticles';
import connectToDatabase from '@/db/connection';
import { isAIRelated, cleanAndTruncateText } from './cleanText';

async function storeArticles() {
    try {
        await connectToDatabase();
        
        // Clear existing articles
        await Article.deleteMany({});
        console.log('Cleared existing articles');

        const articles = await fetchArticlesFromRSS();
        console.log(`Fetched ${articles.length} articles to process`);

        let stored = 0;

        for (const article of articles) {
            try {
                // Check if article is AI-related
                if (isAIRelated(article)) {
                    const newArticle = new Article({
                        ...article,
                        isAIRelated: true,
                        description: cleanAndTruncateText(article.description, 40),
                        content: cleanAndTruncateText(article.content, 40)
                    });
                    await newArticle.save();
                    stored++;
                }
            } catch (error) {
                console.error('Error storing article:', article.title, error);
            }
        }

        console.log(`Stored ${stored} new AI-related articles`);
    } catch (error) {
        console.error('Error in storeArticles:', error);
        throw error;
    }
}

export default storeArticles;