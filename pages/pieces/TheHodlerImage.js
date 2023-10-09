import { AspectRatio, Center, Flex } from "@chakra-ui/react";
import BackButton2 from "../../components/BackButton2";
import Layout from "../../lib/article";
import styles from "../../styles/image.module.css";

const TheHodlerImage = () => {
  return (
    <Layout title="The-Hodler">
      <BackButton2 linkPath="/pieces/TheHodler/" />
      <Flex justifyContent="space-around">
        <Center>
          <div className={styles.imageContainer}>
            <AspectRatio ratio={1} style={{ marginTop: "21px" }}>
              <iframe
                title="the-hodler-ar"
                src="https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/RPReplay_Final1647536982_2_h2qokq.mp4"
                allowFullScreen
              />
            </AspectRatio>
          </div>
        </Center>
      </Flex>
    </Layout>
  );
};

export default TheHodlerImage;
