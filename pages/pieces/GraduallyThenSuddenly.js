import { Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import BackButton from "../../components/BackButton";
import CryptoGraffiti from "../../components/cryptograffiti";
import Layout from "../../lib/article";

const GraduallyThenSuddenly = () => {
  return (
    <Layout title="Gradually Then Suddenly">
      <NextLink color="inherit" textDecor="none" href="/">
        <BackButton linkPath={"/"} />
      </NextLink>
      <Flex mt={12} direction="row" justifyContent="space-around">
        <Text style={{ lineHeight: "32px", fontSize: "24px" }} p={8} w="50%">
          cryptograffiti is the banksy of bitcoin art.
        </Text>
        <CryptoGraffiti
          linkPath={"/pieces/GraduallyThenSuddenlyImage"}
          imagePath={"../../images/Gradually_Then_Suddenly.png"}
        />
      </Flex>
    </Layout>
  );
};

export default GraduallyThenSuddenly;
