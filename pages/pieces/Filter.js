import { Flex, Text } from '@chakra-ui/react';
import Layout from '../../lib/article';
import Josie from '../../components/Josie';
import BackButton from '../../components/BackButton';

const Filter = () => {
  return (
    <Layout title="Filter">
      <BackButton linkPath='/' />
      <Flex mt={12} direction='row' justifyContent='space-around'>
        <Text style={{lineHeight: '32px', fontSize: "24px"}}p={8} w='50%'>
        josie is one of the most influential artists in the NFT space.
        </Text>
        <Josie linkPath={'/pieces/FilterImage/'} imagePath={'https://lh3.googleusercontent.com/DR9GadyY-T5gyVXwbqUqLPucugMAh00nhN5jxJcI0YvU5u1x_YXtuHEBDEvXpKOB-zU7P5mk9HFXnnhy0xUFisXrq_KsyK-fNFCI=w600'} />
      </Flex>
    </Layout>
    
  )
}

export default Filter;
