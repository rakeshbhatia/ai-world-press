// src/app/page.js

import connectToDatabase from '@/db/connection';
import Article from '@/models/Article';
import Header from '@/components/Header';
import NewsTable from '@/components/NewsTable';

export default async function HomePage() {
    try {
        await connectToDatabase();
        
        const articles = await Article.find({ isAIRelated: true })
            .sort({ pubDate: -1 })
            .limit(20);

        const formattedArticles = articles.map((article) => ({
            _id: article._id.toString(),
            newsOutlet: article.newsOutlet,
            title: article.title,
            author: article.author || 'Unknown',
            pubDate: article.pubDate,
            category: article.category,
            link: article.link,
            description: article.description,
        }));

        return (
            <div className="min-h-screen bg-gray-50">
                <Header />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Latest AI News</h1>
                        <p className="mt-2 text-sm text-gray-600">
                            Stay updated with the most recent developments in artificial intelligence
                        </p>
                    </div>
                    <NewsTable articles={formattedArticles} />
                </main>
            </div>
        );
    } catch (error) {
        console.error('Error fetching articles:', error);
        return (
            <div className="text-red-500 p-4">
                Error loading articles. Please try again later.
            </div>
        );
    }
}