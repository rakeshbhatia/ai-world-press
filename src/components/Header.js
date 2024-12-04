// src/components/Header.js

import { Box, Heading } from '@chakra-ui/react';

export default function Header() {
    return (
        <Box bg="blue.500" color="white" p={4}>
            <Heading size="lg">AI World Press</Heading>
        </Box>
    );
}
