import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      w="full"
      color="#fff"
      justify="space-between"
      align={"center"}
      mt="35px"
      zIndex={1000}
    >
      <Text fontSize={"37px"} fontWeight="bold" color={"#6EDB5C"}>
        Allisson
      </Text>
      <Flex
        w="30%"
        justifyContent={"space-between"}
        fontSize="20px"
        display={{ base: "none", lg: "flex" }}
      >
        <Text>Home</Text>
        <Text>Sobre</Text>
        <Text>Skills</Text>
        <Text>Contato</Text>
      </Flex>
    </Flex>
  );
}
