import { Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import BackButton from "../../components/BackButton";
import CryptoGraffiti from "../../components/cryptograffiti";
import Layout from "../../lib/article";

const GenesisAddress = () => {
  return (
    <Layout title="Genesis Address">
      <NextLink color="inherit" textDecor="none" href="/">
        <BackButton linkPath={"/"} />
      </NextLink>
      <Flex mt={12} direction="row" justifyContent="space-around">
        <Text style={{ lineHeight: "32px", fontSize: "24px" }} p={8} w="50%">
          1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa is the most famous of all BTC
          addresses as it's associated w/ the genesis block. On 1/3/09 the first
          50 BTC issued were sent to the address, & whether by design or a bug,
          this subsidy cannot be spent. Ppl still send BTC to the address as a
          thx to Satoshi for his creation There are 2 different Genesis Address
          screen prints - a 3 & 4-lined version. Both are signed/numbered on
          high quality, 250 gsm hot press paper w/ a deckled edge. The 3-lined
          prints are 15x18" w/ 4 different 2-color combinations - each a limited
          edition of 21. I collabed w/ artist Kim Hui to make this version
          AR-enabled.
        </Text>
        <CryptoGraffiti
          linkPath={"/pieces/GenesisAddressImage"}
          imagePath={"../../images/GenesisAddress.jpeg"}
        />
      </Flex>
    </Layout>
  );
};

export default GenesisAddress;
