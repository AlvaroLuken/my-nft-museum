import { Flex, Text } from '@chakra-ui/react';
import Layout from '../../lib/article';
import LarvaLabs from '../../components/LarvaLabs';
import BackButton from '../../components/BackButton';

const Cryptopunk = () => {
  return (
    <Layout title="CryptoPunk #6068">
      <BackButton linkPath='/' />
      <Flex mt={12} direction='row' justifyContent='space-around'>
        <Text style={{lineHeight: '32px', fontSize: "24px"}}p={8} w='50%'>
          CryptoPunk #6068 is a unique and rare NFT in the CryptoPunk collection. It is one of the 10,000 unique Punks created by Larva Labs in 2017.
        </Text>
        <LarvaLabs linkPath={'/pieces/CryptopunkImage/'} imagePath={'https://cryptopunks.app/cryptopunks/cryptopunk6068.png'} />
      </Flex>
    </Layout>
    
  )
}

export default Cryptopunk;
