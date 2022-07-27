import { Flex, Image, Center } from '@chakra-ui/react';
import NextLink from 'next/link';
import Layout from '../../lib/article';
import styles from '../../styles/image.module.css';

const CoyoteSoulImage = () => {
  return (
    <Layout title="Coyote&apos;s Soul">
      <NextLink color="inherit" textDecor='none' href="/pieces/CoyoteSoul">
      <button style={{position: 'absolute', padding: "8px", fontFamily:'monospace', cursor: 'pointer'}}>Back</button>
      </NextLink>     
      <Flex justifyContent='space-around'>
        <Center>
        <div className={styles.imageContainer}>
          <Image src="https://media.niftygateway.com/image/upload/q_auto:good,w_800/v1595942801/CarlosMarcial/Ai_Coyote_previz_cwgzys.webp" className={styles.image} />
        </div>
        </Center>
      </Flex>
    </Layout>
    
  )
}

export default CoyoteSoulImage;
