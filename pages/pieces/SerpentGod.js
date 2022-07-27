import { Button, Link, Box, Flex, Image, Text, Container, Center } from '@chakra-ui/react';
import NextLink from 'next/link';
import Layout from '../../lib/article';

const SerpentGod = () => {
  return (
    <Layout title="Coyote's Soul">
      <NextLink color="inherit" textDecor='none' href="/">
        <button style={{padding: "8px", fontFamily:'monospace', cursor: 'pointer'}}>Back</button>
      </NextLink>     
      <Flex mt={12} direction='row' justifyContent='space-around'>
        <Text style={{lineHeight: '32px', fontSize: "24px"}}p={8} w='50%'>
        My <b>very</b> first NFT. I encountered this serpent while on a random Twitter scroll. 
        The deep red background and the snake textured with recognizable Aztec art immediately caught my attention. 
        I had no concept of NFTs then.
        <br>
        </br>
        <br>
        </br>
        Luckily the tweet thread that contained the gif explained there would be a "drop" of some kind, and that through this mysterious drop I could somehow "own" this piece... I didn't really think much further of it... NFTs clicked for me right there and then. This is a digital good that I value and I want to own it, just as if this was a Pokemon card that I valued and I wanted to own.
        So I saved the link and kept the website in mind. The following day, I was so impressed with the Sacred Artificiality collection that I attempted to "raid" the top and rarest piece of the set at drop time: Jaguar's Soul.
        I did not get the piece and so quickly hustled to see if there were any other serpents left. Luckily I was able to nab one of the last remaining two. And so, Serpent-God officially becomes my entry to the NFT market.
        <br>
        </br>
        <br>
        </br>
        This serpent without a doubt changed the entire course of my life. The strong effects that Serpent-God has had on my life is testament to its incredible hidden power, slithering with a graceful purpose.
        <br>
        </br>
        <br>
        </br>
        <b>The serpent is considered a sacred animal by the Aztecs. Textured using AI trained with ancient Aztec art.</b>
        </Text>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <NextLink href="/pieces/SerpentGodImage">
            <Image style={{marginRight: "1.6rem"}} cursor='pointer' mt={8} pb={16} boxSize='720px' src="https://media.niftygateway.com/image/upload/q_auto:good,w_800/v1595942803/CarlosMarcial/Ai_Serpiente_previz_pfg8dk.webp" />
          </NextLink>
          <Center>
            <div style={{display: 'inline-block'}}>
            <h2 style={{display: 'inline-block', fontSize: '28px'}}>Artist:&nbsp;</h2><h2 color='teal' style={{display: 'inline-block', fontSize: '28px'}} ><Link href="https://twitter.com/carlosmarcialt" target="_blank" color='teal' textDecoration='none'>Carlos Marcial</Link></h2>
            <Center>
              <NextLink href="/pieces/SerpentGodImage">
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

export default SerpentGod;
