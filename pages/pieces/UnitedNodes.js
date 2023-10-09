import { Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import CryptoGraffiti from "../../components/cryptograffiti";
import Layout from "../../lib/article";

const UnitedNodes = () => {
  return (
    <Layout title="United Nodes of Bitcoin">
      <NextLink color="inherit" textDecor="none" href="/">
        <button
          style={{ padding: "8px", fontFamily: "monospace", cursor: "pointer" }}
        >
          Back
        </button>
      </NextLink>
      <Flex mt={12} direction="row" justifyContent="space-around">
        <Text style={{ lineHeight: "32px", fontSize: "24px" }} p={8} w="50%">
          cryptograffiti is the banksy of bitcoin art.
        </Text>
        <CryptoGraffiti
          linkPath={"/pieces/UnitedNodesImage"}
          imagePath={
            "https://cdn.shopify.com/s/files/1/0826/9235/products/IMG_3203_1920x.jpg?v=1602797122"
          }
        />
      </Flex>
    </Layout>
  );
};

export default UnitedNodes;
