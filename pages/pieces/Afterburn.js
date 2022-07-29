import { Flex, Text } from '@chakra-ui/react';
import Layout from '../../lib/article';
import XCOPY from '../../components/XCOPY';
import BackButton from '../../components/BackButton';

const Afterburn = () => {
  return (
    <Layout title="Afterburn">
      <BackButton linkPath='/' />
      <Flex mt={12} direction='row' justifyContent='space-around'>
        <Text style={{lineHeight: '32px', fontSize: "24px"}}p={8} w='50%'>
        XCOPY is widely known as one of the most popular crypto artists in the world. Some call him the "first" cryptoartist.
        </Text>
        <XCOPY linkPath={'/pieces/AfterburnImage/'} imagePath={'https://media.niftygateway.com/image/upload/q_auto:good,w_500/v1616442657/Ashley/Xcopy5/AFTERBURN_RED_-_XCOPY_2089_lkfib4.webp'} />
      </Flex>
    </Layout>
    
  )
}

export default Afterburn;
