import { Center, Flex, Image } from "@chakra-ui/react";
import BackButton2 from "../../components/BackButton2";
import Layout from "../../lib/article";
import styles from "../../styles/image.module.css";

const GraduallyThenSuddenlyImage = () => {
  return (
    <Layout title="Gradually Then Suddenly">
      <BackButton2 linkPath="/pieces/GraduallyThenSuddenly/" />
      <Flex justifyContent="space-around">
        <Center>
          <div className={styles.imageContainer}>
            <Image
              src="../../images/Gradually_Then_Suddenly.png"
              className={styles.image}
            />
          </div>
        </Center>
      </Flex>
    </Layout>
  );
};

export default GraduallyThenSuddenlyImage;
