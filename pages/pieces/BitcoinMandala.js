import { Flex, Text } from "@chakra-ui/react";
import BackButton from "../../components/BackButton";
import CrayonSmell from "../../components/CrayonSmell";
import Layout from "../../lib/article";

const BitcoinMandala = () => {
  return (
    <Layout title="Bitcoin Mandala">
      <BackButton linkPath="/" />
      <Flex mt={12} direction="row" justifyContent="space-around">
        <Text style={{ lineHeight: "32px", fontSize: "24px" }} p={8} w="50%">
          “The beauty of it smote his heart, as he looked up out of the forsaken
          land, and hope returned to him. For like a shaft, clear and cold, the
          thought pierced him that in the end the Shadow was only a small and
          passing thing: there was light and high beauty for ever beyond its
          reach.” This print is 20 x 20 inches and part of a signed and numbered
          limited edition set of 50.
        </Text>
        <CrayonSmell
          linkPath={"/pieces/BitcoinMandalaImage/"}
          imagePath={"../../images/BitcoinMandala2.jpg"}
        />
      </Flex>
    </Layout>
  );
};

export default BitcoinMandala;
