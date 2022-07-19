import React from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface IPropsCard<T = string> {
  icon: T;
  title: T;
  description: T;
  image?: T;
}

export function CardCertificate({
  description,
  icon,
  image,
  title,
}: IPropsCard) {
  return (
    <Flex w={{ base: "100%", lg: "40%" }}>
      <Box>
        <Icon
          icon={icon}
          width={"55px"}
          height={"51px"}
          color="#6EDB5C"
          // style={{ marginTop: "5px" }}
        />
      </Box>
      <Box>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Flex justifyContent="right" w="full">
          <Button bg="#6EDB5C" color={"#fff"}>
            Ver mais
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
