import { Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import Layout from '../../lib/article';
import CryptoGraffiti from '../../components/cryptograffiti';
import BackButton from '../../components/BackButton';

const ProofOfKeys = () => {
  return (
    <Layout title="Proof of Keys">
      <NextLink color="inherit" textDecor='none' href="/">
        <BackButton linkPath={'/'} />
      </NextLink>     
      <Flex mt={12} direction='row' justifyContent='space-around'>
        <Text style={{lineHeight: '32px', fontSize: "24px"}}p={8} w='50%'>
        My <b>very</b> first NFT. I encountered this serpent while on a random Twitter scroll. 
        The deep red background and the snake textured with recognizable Aztec art immediately caught my attention. 
        I had no concept of NFTs then.
        <br>
        </br><br></br>
        This serpent without a doubt changed the entire course of my life. The strong effects that Serpent-God has had on my life is testament to its incredible hidden power, slithering with a graceful purpose.
        <b>The serpent is considered a sacred animal by the Aztecs. Textured using AI trained with ancient Aztec art.</b>
        </Text>
        <CryptoGraffiti linkPath={'/pieces/ProofOfKeysImage'} imagePath={'http://cdn.shopify.com/s/files/1/0826/9235/products/IMG_61992_1024x.jpg?v=1650350198'} />
      </Flex>
    </Layout>
    
  )
}

export default ProofOfKeys;
