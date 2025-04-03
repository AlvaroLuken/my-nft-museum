import { Flex, Image, Center } from '@chakra-ui/react';
import BackButton2 from '../../components/BackButton2';
import Layout from '../../lib/article';
import styles from '../../styles/image.module.css';

const CryptopunkImage = () => {
  return (
    <Layout title="CryptoPunk">
      <BackButton2 linkPath='/pieces/Cryptopunk/' />  
      <Flex justifyContent='space-around'>
        <Center>
        <div className={styles.imageContainer}>
          <Image style={{height: '120vh'}} src="https://cryptopunks.app/cryptopunks/cryptopunk6068.png" className={styles.image} />
        </div>
        </Center>
      </Flex>
    </Layout>
    
  )
}

export default CryptopunkImage;
