import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface IPropsCard<T = string> {
  icon: T;
  title: T;
  description: T;
  type?: "about" | "skill";
}

export function CardAbout({
  description,
  icon,
  title,
  type = "about",
}: IPropsCard) {
  return (
    <Flex
      w="307px"
      h="350px"
      bg="#131313"
      align={type === "about" ? "center" : "flex-start"}
      flexDir="column"
      borderRadius={"10px"}
      boxShadow="xl"
      px="30px"
      id="card"
    >
      <Icon
        icon={icon}
        width={type === "about" ? "75px" : "50px"}
        height={"71px"}
        color="#6EDB5C"
        style={{ marginTop: 50 }}
        className="icon"
      />
      <Text
        fontSize={type === "about" ? "18px" : "20px"}
        color="#fff"
        mt="16px"
        className="title"
      >
        {title}
      </Text>
      <Text
        fontSize={"14px"}
        color="#fff"
        mt={type === "about" ? "16px" : "20px"}
        textAlign={type === "about" ? "center" : "left"}
      >
        {description}
      </Text>
    </Flex>
  );
}
