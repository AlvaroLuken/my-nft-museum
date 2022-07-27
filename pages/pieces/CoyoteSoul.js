import { Flex, Image, Text, Center, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import Layout from '../../lib/article';

const CoyoteSoul = () => {
  return (
    <Layout title="Coyote's Soul">
      <NextLink color="inherit" textDecor='none' href="/">
        <button style={{padding: "8px", fontFamily:'monospace', cursor: 'pointer'}}>Back</button>
      </NextLink>     
      <Flex mt={12} direction='row' justifyContent='space-around'>
        <Text style={{lineHeight: '32px', fontSize: "24px"}}p={8} w='50%'>
        Coyote's Soul is the second piece I picked up out of the Sacred Artificiality collection by Carlos Marcial.
        <br>
        </br>
        <br>
        </br>
        I was a more experienced collector by this point so when a seller listed this at little above mint price, I was quick to snipe it.
        <br>
        </br>
        <br>
        </br>
        The richly deep Mexican mural blue has a calming effect on my eyes. I could see this fella run for hours.
        <br>
        </br>
        <br>
        </br>
        <b>The coyote is considered a sacred animal by the Otomis. Textured using AI trained with Otomi traditional art.</b>
        </Text>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <NextLink href="/pieces/CoyoteSoulImage">
            <Image style={{marginRight: "1.6rem"}} cursor='pointer' mt={8} pb={16} boxSize='720px' src="https://media.niftygateway.com/image/upload/q_auto:good,w_800/v1595942801/CarlosMarcial/Ai_Coyote_previz_cwgzys.webp" />
          </NextLink>
          <Center>
            <div style={{display: 'inline-block'}}>
            <h2 style={{display: 'inline-block', fontSize: '28px'}}>Artist:&nbsp;</h2><h2 color='teal' style={{display: 'inline-block', fontSize: '28px'}} ><Link href="https://twitter.com/carlosmarcialt" color='teal' textDecoration='none'>Carlos Marcial</Link></h2>
            <Center>
              <NextLink href="/pieces/CoyoteSoulImage">
                <Text cursor='pointer' style={{marginTop: '4px',  color: 'gray'}}>(Click on image to expand...)</Text>
              </NextLink>
            </Center>
            </div>
          </Center>
        </div>
      </Flex>
    </Layout>
    
  )
}

export default CoyoteSoul;
