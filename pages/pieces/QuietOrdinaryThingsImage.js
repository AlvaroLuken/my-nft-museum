import { Flex, Image, Center } from '@chakra-ui/react';
import BackButton2 from '../../components/BackButton2';
import Layout from '../../lib/article';
import styles from '../../styles/image.module.css';

const QuietOrdinaryThingsImage = () => {
  return (
    <Layout title="Quiet Ordinary Things">
      <BackButton2 linkPath='/pieces/QuietOrdinaryThings/' />  
      <Flex justifyContent='space-around'>
        <Center>
          <div className={styles.imageContainer}>
            <Image src="https://media.niftygateway.com/image/upload/q_auto:best,w_1600,c_limit/v1606061842/BrendanDawes/Br%CE%9Endan_Daw%CE%9Es-The_Waves_Quiet_Ordinary_Things_-_Brendan_Dawes_l7wzc7.png" className={styles.image} />
          </div>
        </Center>
      </Flex>
    </Layout>
    
  )
}

export default QuietOrdinaryThingsImage;
