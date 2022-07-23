import React from "react";
import {
  Flex,
  Box,
  Text,
  Button,
  Divider,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
export function CardProject() {
  return (
    <Box w="300px" border={"1px solid #5dac4f56"} borderRadius="5px">
      <Image
        borderTopRadius={"5px"}
        h="200px"
        // objectFit="cover"
        src="https://cdn-images-1.medium.com/max/800/1*wZMjYVLM5VZPoBhD6518Vw.jpeg"
        alt="Imagem do projeto"
      />
      <Box p="10px">
        <Text fontSize={"20px"} color="#6EDB5C">
          DashBoard
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nulla
          cupiditate, ullam perferendis voluptatem unde iure quia.
        </Text>
        <Button bg="#6EDB5C" mt="10px" color={"#fff"} zIndex={1000}>
          Acessar
        </Button>
      </Box>
    </Box>
  );
}
