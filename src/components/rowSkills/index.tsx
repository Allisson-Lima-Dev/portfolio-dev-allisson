import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface IpropsCardRow {
  skill: string;
  level: string;
}

export function RowSkills({ level, skill }: IpropsCardRow) {
  return (
    <Flex
      w="full"
      justify={"space-between"}
      align="center"
      color="#fff"
      my="5px"
    >
      <Text fontSize={"20px"}>{skill}</Text>
      <Box w="40%" h="2px" bg="#6EDB5C" />
      <Flex>
        <Text fontSize={"18px"} mr="10px">
          {level}
        </Text>
        <Icon icon="ant-design:check-outlined" color="#6EDB5C" width={"35px"} />
      </Flex>
    </Flex>
  );
}
