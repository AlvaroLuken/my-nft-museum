import { Center, Image, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

function CrayonSmell({ linkPath, imagePath }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NextLink href={linkPath}>
        <Image
          style={{ marginRight: "1.6rem" }}
          cursor="pointer"
          mt={8}
          pb={16}
          boxSize="620px"
          src={imagePath}
        />
      </NextLink>
      <Center>
        <div style={{ display: "inline-block" }}>
          <h2 style={{ display: "inline-block", fontSize: "28px" }}>
            Artist:&nbsp;
          </h2>
          <h2
            color="teal"
            style={{ display: "inline-block", fontSize: "28px" }}
          >
            <Link
              href="https://twitter.com/crayonsmell"
              target="_blank"
              color="teal"
              textDecoration="none"
            >
              crayonsmell
            </Link>
          </h2>
          <Center>
            <NextLink href={linkPath}>
              <Text cursor="pointer" style={{ marginTop: "0", color: "gray" }}>
                (Click on image to expand...)
              </Text>
            </NextLink>
          </Center>
        </div>
      </Center>
    </div>
  );
}

export default CrayonSmell;
