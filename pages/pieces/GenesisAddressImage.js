import { Center, Flex, Image } from "@chakra-ui/react";
import BackButton2 from "../../components/BackButton2";
import Layout from "../../lib/article";
import styles from "../../styles/image.module.css";

const GenesisAddressImage = () => {
  return (
    <Layout title="Genesis Address">
      <BackButton2 linkPath="/pieces/GenesisAddress/" />
      <Flex justifyContent="space-around">
        <Center>
          <div className={styles.imageContainer}>
            <Image
              src="../../images/GenesisAddress.jpeg"
              className={styles.image}
            />
          </div>
        </Center>
      </Flex>
    </Layout>
  );
};

export default GenesisAddressImage;
