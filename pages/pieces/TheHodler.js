import { Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import BackButton from "../../components/BackButton";
import CrayonSmell from "../../components/CrayonSmell";
import Layout from "../../lib/article";

const TheHodler = () => {
  return (
    <Layout title="The Hodler">
      <NextLink color="inherit" textDecor="none" href="/">
        <BackButton linkPath={"/"} />
      </NextLink>
      <Flex mt={12} direction="row" justifyContent="space-around">
        <Text style={{ lineHeight: "32px", fontSize: "24px" }} p={8} w="50%">
          This grizzled veteran has endured many battles and watched fortunes
          rise and fall like the tides. Armed with deep conviction and steadfast
          patience, The Hodler plays the long game. Content but never
          complacent, his ever-vigilant stare keeps hucksters and swindlers at
          bay. This fine art print is 20 x 25 inches and part of a signed and
          numbered limited edition set of 21. A supplemental augmented reality
          animation can be viewed using the free Artivive app.
        </Text>
        <CrayonSmell
          linkPath={"/pieces/TheHodlerImage"}
          imagePath={"../../images/TheHodler.png"}
        />
      </Flex>
    </Layout>
  );
};

export default TheHodler;
