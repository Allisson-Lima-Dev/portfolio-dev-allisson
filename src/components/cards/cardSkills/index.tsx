import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface IPropsCard<T = string> {
  icon: T;
  title: T;
}

export function CardSkill({ icon, title }: IPropsCard) {
  return (
    <Flex
      w="130px"
      h="143px"
      bg="#0f0f0f"
      align={"center"}
      flexDir="column"
      borderRadius={"10px"}
      boxShadow="dark-lg"
      //   px="30px"
      id="card"
    >
      <Icon
        icon={icon}
        width={"50px"}
        height={"50px"}
        color="#6EDB5C"
        style={{ marginTop: 20 }}
        className="icon"
      />
      <Text
        textAlign={"center"}
        fontSize={"16px"}
        color="#fff"
        mt="16px"
        className="title"
      >
        {title}
      </Text>
    </Flex>
  );
}
