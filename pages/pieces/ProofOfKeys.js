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
        cryptograffiti is the banksy of bitcoin art.
        </Text>
        <CryptoGraffiti linkPath={'/pieces/ProofOfKeysImage'} imagePath={'http://cdn.shopify.com/s/files/1/0826/9235/products/IMG_61992_1024x.jpg?v=1650350198'} />
      </Flex>
    </Layout>
    
  )
}

export default ProofOfKeys;
