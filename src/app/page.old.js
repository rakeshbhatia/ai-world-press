// src/app/page.js

/*'use client';

import { useState, useEffect } from 'react';

export default function HomePage() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Fetch articles from the API route
        const fetchArticles = async () => {
            const response = await fetch('/api/articles');
            const data = await response.json();
            setArticles(data);
        };
        fetchArticles();
    }, []);

    return (
        <div className="flex justify-center p-6">
            <div className="w-3/4 border border-gray-300 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center p-4 border-b bg-gray-100">
                    Latest AI News
                </h1>*/

                {/* Table layout */}
                /*<table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 border border-gray-300 text-left">
                                Title
                            </th>
                            <th className="px-4 py-2 border border-gray-300 text-left">
                                Author
                            </th>
                            <th className="px-4 py-2 border border-gray-300 text-left">
                                Published Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map((article) => (
                            <tr
                                key={article._id}
                                className="hover:bg-gray-100 even:bg-gray-50"
                            >
                                <td className="px-4 py-2 border border-gray-300">
                                    {article.title}
                                </td>
                                <td className="px-4 py-2 border border-gray-300">
                                    {article.author || 'Unknown'}
                                </td>
                                <td className="px-4 py-2 border border-gray-300">
                                    {new Date(article.pubDate).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}*/

// src/app/page.js

'use client';

import { useState, useEffect } from 'react';

export default function HomePage() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Fetch articles from the API route
        const fetchArticles = async () => {
            const response = await fetch('/api/articles');
            const data = await response.json();
            setArticles(data);
        };
        fetchArticles();
    }, []);

    return (
        <div className="flex justify-center p-6">
            <div className="w-3/4 border border-gray-300 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center p-4 border-b bg-gray-100">
                    Latest AI News
                </h1>

                {/* Table layout */}
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 border border-gray-300 text-left">Title</th>
                            <th className="px-4 py-2 border border-gray-300 text-left">Author</th>
                            <th className="px-4 py-2 border border-gray-300 text-left">Published Date</th>
                            <th className="px-4 py-2 border border-gray-300 text-left">News Outlet</th>
                            <th className="px-4 py-2 border border-gray-300 text-left">Category</th>
                            <th className="px-4 py-2 border border-gray-300 text-left">Link</th>
                            <th className="px-4 py-2 border border-gray-300 text-left">Description</th>
                            <th className="px-4 py-2 border border-gray-300 text-left">Content</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map((article) => (
                            <tr key={article._id} className="hover:bg-gray-100 even:bg-gray-50">
                                <td className="px-4 py-2 border border-gray-300">{article.title}</td>
                                <td className="px-4 py-2 border border-gray-300">{article.author || 'Unknown'}</td>
                                <td className="px-4 py-2 border border-gray-300">
                                    {new Date(article.pubDate).toLocaleDateString()}
                                </td>
                                <td className="px-4 py-2 border border-gray-300">{article.outlet || 'N/A'}</td>
                                <td className="px-4 py-2 border border-gray-300">{article.category || 'N/A'}</td>
                                <td className="px-4 py-2 border border-gray-300">
                                    <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                        Read Article
                                    </a>
                                </td>
                                <td className="px-4 py-2 border border-gray-300">{article.description || 'N/A'}</td>
                                <td className="px-4 py-2 border border-gray-300">{article.content || 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
