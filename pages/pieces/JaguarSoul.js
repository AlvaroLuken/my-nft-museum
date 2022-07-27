import { Button, Link, Box, Flex, Image, Text, Container, Center } from '@chakra-ui/react';
import NextLink from 'next/link';
import Layout from '../../lib/article';

const JaguarSoul = () => {
  return (
    <Layout title="Coyote's Soul">
      <NextLink color="inherit" textDecor='none' href="/">
        <button style={{padding: "8px", fontFamily:'monospace', cursor: 'pointer'}}>Back</button>
      </NextLink>     
      <Flex mt={12} direction='row' justifyContent='space-around'>
        <Text style={{lineHeight: '32px', fontSize: "24px"}}p={8} w='50%'>
        Jaguar's Soul was my first major NFT purchase. This was a piece I saved up for and was nervous about pulling the trigger. Not for any reason related to the piece, but because I had never spent such a large amount of money to buy really... anything. Maybe my car. So I learned to play the art game like the high rollers do and pulled the trigger.
        <br></br><br></br>
        Since I had purchased Coyote's Soul, I had a longing to finish collecting the full Sacred Artificiality collection - the collection that lured me into NFTs in the first place. The jaguar was the hardest to acquire since it's only a 3/3 piece. When one went on sale, I jumped as quickly as I could knowing it would be bought regardless.
        <br></br><br></br>
        There is something deeply powerful about this one... I am glad this guy is on my side. The deep golden-yellow background immediately brings me back to my early days living in Mexico City. It's a hue/depth that I could live in. It's royal to me and entirely a beautiful tribute to my Latino roots.
        <br></br><br></br>
        There is a spiritual connection to this piece that I have like no other. This jaguar is ME. He will be with me for the rest of my life and then he will be with my kids and their kids. "No value or utility here, only love and a shared vision of the future." - Carlos Marcial
        <br></br><br></br>
        <b>The jaguar is considered a sacred animal by the Huichols. Textured using AI trained with Huichol traditional art.</b>
        </Text>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <NextLink href="/pieces/JaguarSoulImage">
            <Image style={{marginRight: "1.6rem"}} cursor='pointer' mt={8} pb={16} boxSize='720px' src="https://media.niftygateway.com/image/upload/q_auto:good,w_800/v1595942803/CarlosMarcial/Ai_Jaguar_previz_ah5kbf.webp" />
          </NextLink>
          <Center>
            <div style={{display: 'inline-block'}}>
            <h2 style={{display: 'inline-block', fontSize: '28px'}}>Artist:&nbsp;</h2><h2 color='teal' style={{display: 'inline-block', fontSize: '28px'}} ><Link href="https://twitter.com/carlosmarcialt" color='teal' textDecoration='none'>Carlos Marcial</Link></h2>
            <Center>
              <NextLink href="/pieces/JaguarSoulImage">
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

export default JaguarSoul;
