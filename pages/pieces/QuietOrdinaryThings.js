import { Flex, Text } from '@chakra-ui/react';
import Layout from '../../lib/article';
import BrendanDawes from '../../components/BrendanDawes';
import BackButton from '../../components/BackButton';

const QuietOrdinaryThings = () => {
  return (
    <Layout title="Quiet Ordinary Things">
      <BackButton linkPath='/' />
      <Flex mt={12} direction='row' justifyContent='space-around'>
        <Text style={{lineHeight: '32px', fontSize: "24px"}}p={8} w='50%'>
        Brendan Dawes has two pieces in the MoMA's permanent collection.
        </Text>
        <BrendanDawes linkPath={'/pieces/QuietOrdinaryThingsImage'} imagePath={'https://media.niftygateway.com/image/upload/q_auto:best,w_1600,c_limit/v1606061842/BrendanDawes/Br%CE%9Endan_Daw%CE%9Es-The_Waves_Quiet_Ordinary_Things_-_Brendan_Dawes_l7wzc7.png'} />
      </Flex>
    </Layout>
    
  )
}

export default QuietOrdinaryThings;
