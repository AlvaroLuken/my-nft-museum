import { Flex, Image, Center } from '@chakra-ui/react';
import NextLink from 'next/link';
import Layout from '../lib/article';
import styles from '../styles/image.module.css';

function UNImageDisplay({fn}) {
  <Layout title="United Nodes of Bitcoin">
    <NextLink color="inherit" textDecor='none' href="/pieces/UnitedNodes">
      <button style={{position: 'absolute', padding: "8px", fontFamily:'monospace', cursor: 'pointer'}}>Back</button>
    </NextLink>     
    <button onClick={fn}>Click Mefds!</button>
    <Flex justifyContent='space-around'>
      <Center>
      <div className={styles.imageContainer}>
        <Image src="https://cdn.shopify.com/s/files/1/0826/9235/products/IMG_3203_1920x.jpg?v=1602797122" className={styles.image} />
      </div>
      </Center>
    </Flex>
  </Layout>
}

export default UNImageDisplay;