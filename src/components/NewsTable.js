import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
  Image,
  Skeleton,
  Box
} from '@chakra-ui/react'
import useSWR from 'swr'
import { fetchNews } from '../lib/rssParser'

const fetcher = () => fetchNews()

export default function NewsTable() {
  const { data: articles, error } = useSWR('/api/news', fetcher, {
    refreshInterval: 300000 // Refresh every 5 minutes
  })

  if (error) return <Box>Failed to load news</Box>
  if (!articles) return <Skeleton height="400px" />

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Source</Th>
          <Th>Featured Image</Th>
          <Th>Headline</Th>
          <Th>Author</Th>
          <Th>Word Count</Th>
          <Th>Published</Th>
        </Tr>
      </Thead>
      <Tbody>
        {articles.map((article, index) => (
          <Tr key={index}>
            <Td>{article.source}</Td>
            <Td>
              {article.image && (
                <Image
                  src={article.image.url}
                  alt={article.title}
                  maxW="100px"
                  maxH="60px"
                  objectFit="cover"
                />
              )}
            </Td>
            <Td>
              <Link href={article.link} isExternal color="blue.500">
                {article.title}
              </Link>
            </Td>
            <Td>{article.author}</Td>
            <Td>{article.wordCount || 'N/A'}</Td>
            <Td>{new Date(article.pubDate).toLocaleDateString()}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
