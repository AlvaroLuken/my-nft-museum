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
        <b>Coyote's Soul</b> is the second piece I picked up out of the Sacred Artificiality collection by Carlos Marcial.
        <br></br><br></br>
        I was a more experienced collector by this point so when a seller listed this at little above mint price, I was quick to snipe it.
        <br></br><br></br>
        The richly deep Mexican mural blue has a calming effect on my eyes. I could see this fella run for hours.
        <br></br><br></br>
        <b>The coyote is considered a sacred animal by the Otomis. Textured using AI trained with Otomi traditional art.</b>
        </Text>
        <Josie linkPath={'/pieces/FilterImage/'} imagePath={'https://lh3.googleusercontent.com/DR9GadyY-T5gyVXwbqUqLPucugMAh00nhN5jxJcI0YvU5u1x_YXtuHEBDEvXpKOB-zU7P5mk9HFXnnhy0xUFisXrq_KsyK-fNFCI=w600'} />
      </Flex>
    </Layout>
    
  )
}

export default Filter;
