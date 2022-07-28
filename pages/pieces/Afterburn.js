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
        <b>Coyote's Soul</b> is the second piece I picked up out of the Sacred Artificiality collection by Carlos Marcial.
        <br></br><br></br>
        I was a more experienced collector by this point so when a seller listed this at little above mint price, I was quick to snipe it.
        <br></br><br></br>
        The richly deep Mexican mural blue has a calming effect on my eyes. I could see this fella run for hours.
        <br></br><br></br>
        <b>The coyote is considered a sacred animal by the Otomis. Textured using AI trained with Otomi traditional art.</b>
        </Text>
        <XCOPY linkPath={'/pieces/AfterburnImage/'} imagePath={'https://media.niftygateway.com/image/upload/q_auto:good,w_500/v1616442657/Ashley/Xcopy5/AFTERBURN_RED_-_XCOPY_2089_lkfib4.webp'} />
      </Flex>
    </Layout>
    
  )
}

export default Afterburn;
