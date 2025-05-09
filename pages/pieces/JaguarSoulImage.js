import { Flex, Image, Center } from '@chakra-ui/react';
import BackButton2 from '../../components/BackButton2';
import Layout from '../../lib/article';
import styles from '../../styles/image.module.css';

const JaguarSoulImage = () => {
  return (
    <Layout title="Jaguar&apos;s Soul">
      <BackButton2 linkPath='/pieces/JaguarSoul/' />  
      <Flex justifyContent='space-around'>
        <Center>
        <div className={styles.imageContainer}>
          <Image src="https://media.niftygateway.com/image/upload/q_auto:good,w_800/v1595942803/CarlosMarcial/Ai_Jaguar_previz_ah5kbf.webp" className={styles.image} />
        </div>
        </Center>
      </Flex>
    </Layout>
  )
}

export default JaguarSoulImage;
