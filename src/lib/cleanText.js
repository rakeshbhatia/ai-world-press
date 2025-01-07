// src/lib/cleanText.js

/**
 * Cleans HTML tags and truncates text to a specified length
 * @param {string} text - Text to clean and truncate
 * @param {number} maxLength - Maximum length of the output text
 * @returns {string} Cleaned and truncated text
 */
export function cleanAndTruncateText(text = '', maxLength = 40) {
    // Remove HTML tags
    const cleanText = text.replace(/<[^>]*>/g, '')
        // Remove special characters and excessive whitespace
        .replace(/&[^;]+;/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    
    // Truncate and add ellipsis if necessary
    return cleanText.length > maxLength 
        ? `${cleanText.substring(0, maxLength)}...`
        : cleanText;
}

/**
 * Checks if an article is AI-related based on keywords
 * @param {Object} article - Article object to check
 * @returns {boolean} True if article is AI-related
 */
export function isAIRelated(article) {
    const aiKeywords = [
        'artificial intelligence',
        'machine learning',
        'deep learning',
        'neural network',
        'AI',
        'ML',
        'NLP',
        'computer vision',
        'robotics',
        'autonomous',
        'chatbot',
        'GPT',
        'large language model',
        'LLM',
        'transformer',
        'generative ai'
        // Add more AI-related keywords as needed
    ];

    const searchText = `
        ${article.title} 
        ${article.description} 
        ${article.content}
    `.toLowerCase();

    return aiKeywords.some(keyword => searchText.includes(keyword.toLowerCase()));
}