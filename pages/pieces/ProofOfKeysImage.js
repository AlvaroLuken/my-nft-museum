import { Flex, Image, Center } from '@chakra-ui/react';
import BackButton2 from '../../components/BackButton2';
import Layout from '../../lib/article';
import styles from '../../styles/image.module.css';

const ProofOfKeysImage = () => {
  return (
    <Layout title="Proof of Keys">
      <BackButton2 linkPath='/pieces/ProofOfKeys/' />  
      <Flex justifyContent='space-around'>
        <Center>
          <div className={styles.imageContainer}>
            <Image src="http://cdn.shopify.com/s/files/1/0826/9235/products/IMG_61992_1024x.jpg?v=1650350198" className={styles.image} />
          </div>
        </Center>
      </Flex>
    </Layout>
    
  )
}

export default ProofOfKeysImage;
