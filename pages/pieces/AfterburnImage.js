import { Flex, Image, Center } from '@chakra-ui/react';
import BackButton2 from '../../components/BackButton2';
import Layout from '../../lib/article';
import styles from '../../styles/image.module.css';

const AfterburnImage = () => {
  return (
    <Layout title="Afterburn">
      <BackButton2 linkPath='/pieces/Afterburn/' />  
      <Flex justifyContent='space-around'>
        <Center>
        <div className={styles.imageContainer}>
          <Image style={{height: '120vh'}} src="https://media.niftygateway.com/image/upload/q_auto:good,w_500/v1616442657/Ashley/Xcopy5/AFTERBURN_RED_-_XCOPY_2089_lkfib4.webp" className={styles.image} />
        </div>
        </Center>
      </Flex>
    </Layout>
    
  )
}

export default AfterburnImage;
