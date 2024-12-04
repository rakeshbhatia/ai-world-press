// src/components/ArticleCard.js

import { Box, Heading, Text } from '@chakra-ui/react';

export default function ArticleCard({ article }) {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Heading size="md" mb={2}>{article.title}</Heading>
            <Text fontSize="sm" color="gray.600">By {article.author || 'Unknown Author'}</Text>
            <Text mt={2}>{article.description}</Text>
        </Box>
    );
}
