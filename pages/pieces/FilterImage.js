import { Flex, Image, Center } from '@chakra-ui/react';
import BackButton2 from '../../components/BackButton2';
import Layout from '../../lib/article';
import styles from '../../styles/image.module.css';

const FilterImage = () => {
  return (
    <Layout title="Filter">
      <BackButton2 linkPath='/pieces/Filter/' />  
      <Flex justifyContent='space-around'>
        <Center>
        <div className={styles.imageContainer}>
          <Image src="https://lh3.googleusercontent.com/DR9GadyY-T5gyVXwbqUqLPucugMAh00nhN5jxJcI0YvU5u1x_YXtuHEBDEvXpKOB-zU7P5mk9HFXnnhy0xUFisXrq_KsyK-fNFCI=w600" className={styles.image} />
        </div>
        </Center>
      </Flex>
    </Layout>
  )
}

export default FilterImage;
