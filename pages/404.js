import { Box, Flex, Divider, Text, Heading, Container } from '@chakra-ui/react';
import NextLink from 'next/link';
import BackButton from '../components/BackButton';

function NotFound() {
  return (
    <Container>
      <Flex mt={8} alignItems='center' flexDirection='column'>
        <Heading as="h1" fontSize='32px'>Not Found</Heading>
        <Text margin={0}>The page you&apos;re looking for was not found.</Text>
      </Flex>
      <Divider my={6} />
      <Box align="center">
        <iframe src="https://giphy.com/embed/JUqAx6q2jnQtYvXVB4" width="480" height="327" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/moodman-panic-confusion-mr-krabs-meme-JUqAx6q2jnQtYvXVB4"></a></p>
      </Box>
      <Box my={6} align="center">
        <NextLink href="/">
          <BackButton linkPath={'/'}/>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound;