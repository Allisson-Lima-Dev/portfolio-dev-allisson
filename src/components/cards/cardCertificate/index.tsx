import React from "react";
import { Modal } from "~/components";
import {
  Flex,
  Box,
  Text,
  Button,
  Divider,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
interface IPropsCard<T = string | any> {
  icon?: T;
  title: T;
  description: T;
  image?: T;
  institution?: T;
}

export function CardCertificate({
  description,
  icon,
  image,
  title,
  institution,
}: IPropsCard) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      w={{ base: "100%", lg: "40%" }}
      flexDir={{ base: "column", md: "row" }}
    >
      <Box mr="5px">
        <Image
          src={institution}
          alt="Imagem do certificado"
          w={{ base: "50px", md: "200px" }}
          my={{ base: "10px", md: "0" }}
        />
      </Box>
      <Box>
        <Text color={"#6EDB5C"} fontSize="20px" textTransform={"uppercase"}>
          {title}
        </Text>
        <Divider color="#6EDB5C" my="5px" />
        <Text>{description}</Text>
        <Flex justifyContent="right" w="full">
          <Button
            bg="#6EDB5C"
            mt="10px"
            color={"#fff"}
            onClick={onOpen}
            zIndex={1000}
          >
            Certificado
          </Button>
        </Flex>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onPress={() => console.log()}
        title={title}
      >
        <Image loading="lazy" src={image} alt="Imagem do certificado" />
      </Modal>
    </Flex>
  );
}
