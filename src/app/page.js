// src/app/page.js

/*import { Box, Heading } from '@chakra-ui/react'
import NewsTable from '../components/NewsTable'

export default function Home() {
  return (
    <Box p={8}>
      <Heading mb={6}>AI World Press</Heading>
      <NewsTable />
    </Box>
  )
}*/

'use client';

import { useState, useEffect } from 'react';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import ArticleCard from '@/components/ArticleCard';

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
        <Box p={6}>
            <Heading mb={6}>Latest AI News</Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                {articles.map((article) => (
                    <ArticleCard key={article._id} article={article} />
                ))}
            </SimpleGrid>
        </Box>
    );
}
