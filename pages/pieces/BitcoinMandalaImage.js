import { Center, Flex, Image } from "@chakra-ui/react";
import BackButton2 from "../../components/BackButton2";
import Layout from "../../lib/article";
import styles from "../../styles/image.module.css";

const BitcoinMandalaImage = () => {
  return (
    <Layout title="Bitcoin Mandala">
      <BackButton2 linkPath="/pieces/BitcoinMandala/" />
      <Flex justifyContent="space-around">
        <Center>
          <div className={styles.imageContainer}>
            <Image
              src="../../images/BitcoinMandala.jpeg"
              className={styles.image}
            />
          </div>
        </Center>
      </Flex>
    </Layout>
  );
};

export default BitcoinMandalaImage;
