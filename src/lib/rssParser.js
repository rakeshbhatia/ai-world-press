// src/lib/rssParser.js

import Parser from 'rss-parser'

const RSS_FEEDS = [
  {
    url: 'https://feeds.feedburner.com/venturebeat/SZYF',
    name: 'VentureBeat'
  },
  {
    url: 'https://feeds.arstechnica.com/arstechnica/index',
    name: 'Ars Technica'
  },
  {
    url: 'https://techcrunch.com/feed/',
    name: 'TechCrunch'
  },
  {
    url: 'https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml',
    name: 'NY Times Tech'
  },
  {
    url: 'https://www.technologyreview.com/feed/',
    name: 'MIT Tech Review'
  }
]

const parser = new Parser({
  customFields: {
    item: [
      ['media:content', 'mediaContent'],
      ['dc:creator', 'creator'],
    ],
  },
})

export async function fetchNews() {
  const allArticles = []

  for (const feed of RSS_FEEDS) {
    try {
      const feedContent = await parser.parseURL(feed.url)
      const latestArticle = feedContent.items[0]

      // Check if article contains AI-related keywords
      const aiKeywords = ['ai', 'artificial intelligence', 'machine learning', 'deep learning', 'neural network']
      const hasAIContent = aiKeywords.some(keyword => 
        (latestArticle.title?.toLowerCase().includes(keyword) || 
         latestArticle.content?.toLowerCase().includes(keyword))
      )

      if (hasAIContent) {
        allArticles.push({
          source: feed.name,
          title: latestArticle.title,
          link: latestArticle.link,
          author: latestArticle.creator || latestArticle.author || 'Unknown',
          pubDate: latestArticle.pubDate,
          image: latestArticle.mediaContent?.[0]?.$ || null,
          wordCount: latestArticle.content ? latestArticle.content.split(' ').length : null,
          description: latestArticle.contentSnippet
        })
      }
    } catch (error) {
      console.error(`Error parsing ${feed.name}:`, error)
    }
  }

  return allArticles
}
