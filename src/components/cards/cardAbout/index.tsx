import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface IPropsCard<T = string> {
  icon: T;
  title: T;
  description: T;
}

export function CardAbout({ description, icon, title }: IPropsCard) {
  return (
    <Flex
      w="307px"
      h="350px"
      bg="#2F2E2E"
      align={"center"}
      flexDir="column"
      borderRadius={"10px"}
      boxShadow="dark-lg"
      px="30px"
      id="card"
    >
      <Icon
        icon={icon}
        width={"75px"}
        height={"71px"}
        color="#6EDB5C"
        style={{ marginTop: 50 }}
        className='icon'
      />
      <Text fontSize={"18px"} color="#fff" mt="16px" className="title">
        {title}
      </Text>
      <Text fontSize={"14px"} color="#fff" mt="16px" textAlign={"center"}>
        {description}
      </Text>
    </Flex>
  );
}
