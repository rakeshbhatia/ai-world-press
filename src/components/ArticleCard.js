// src/components/ArticleCard.js

/*export default function ArticleCard({ article }) {
    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden p-4">
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-sm text-gray-600">By {article.author || 'Unknown Author'}</p>
            <p className="mt-2">{article.description}</p>
        </div>
    );
}*/

export default function ArticleCard({ article }) {
    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden p-4">
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-sm text-gray-600">By {article.author || 'Unknown Author'}</p>
            <p className="text-sm text-gray-500">Published on: {new Date(article.pubDate).toLocaleDateString()}</p>
            <p className="text-sm text-gray-500">Source: {article.outlet || 'Unknown Outlet'}</p>
            <p className="text-sm text-gray-500">Category: {article.category || 'General'}</p>
            <p className="mt-2">{article.description}</p>
            <a 
                href={article.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block text-blue-500 underline"
            >
                Read Full Article
            </a>
            {article.content && (
                <div className="mt-4">
                    <h4 className="text-md font-semibold">Content:</h4>
                    <p className="text-sm text-gray-700">{article.content}</p>
                </div>
            )}
        </div>
    );
}
