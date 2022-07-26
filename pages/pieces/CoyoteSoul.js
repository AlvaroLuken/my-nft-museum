import { Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import Layout from '../../lib/article';
import CarlosMarcial from '../../components/CarlosMarcial';
import BackButton from '../../components/BackButton';

const CoyoteSoul = () => {
  return (
    <Layout title="Coyote's Soul">
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
        <CarlosMarcial linkPath={'/pieces/CoyoteSoulImage'} imagePath={'https://media.niftygateway.com/image/upload/q_auto:good,w_800/v1595942801/CarlosMarcial/Ai_Coyote_previz_cwgzys.webp'} />
      </Flex>
    </Layout>
    
  )
}

export default CoyoteSoul;
