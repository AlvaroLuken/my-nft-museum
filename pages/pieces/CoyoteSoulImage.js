import { Flex, Image, Center } from '@chakra-ui/react';
import BackButton2 from '../../components/BackButton2';
import Layout from '../../lib/article';
import styles from '../../styles/image.module.css';

const CoyoteSoulImage = () => {
  return (
    <Layout title="Coyote&apos;s Soul">
      <BackButton2 linkPath='/pieces/CoyoteSoul' />  
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
