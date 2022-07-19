import React from "react";
import {
  Flex,
  Box,
  Text,
  Button,
  Divider,
  Image,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface IPropsCard<T = string> {
  icon: T;
  title: T;
  description: T;
  image?: T | any;
}

export function CardCertificate({
  description,
  icon,
  image,
  title,
}: IPropsCard) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      w={{ base: "100%", lg: "40%" }}
      flexDir={{ base: "column", md: "row" }}
    >
      <Box mr="5px">
        <Icon
          icon={icon}
          width={"55px"}
          height={"51px"}
          color="#6EDB5C"
          // style={{ marginTop: "5px" }}
        />
      </Box>
      <Box>
        <Text color={"#6EDB5C"} fontSize="20px">
          {title}
        </Text>
        <Divider color="#6EDB5C" my="5px" />
        <Text>{description}</Text>
        <Flex justifyContent="right" w="full">
          <Button bg="#6EDB5C" color={"#fff"} onClick={onOpen} zIndex={2000}>
            Certificado
          </Button>
        </Flex>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={image} alt="Imagem do certificado" />
          </ModalBody>

          <ModalFooter>
            <Button mr={3} variant="ghost" onClick={onClose}>
              Fechar
            </Button>
            <Button bg="#6EDB5C" color={"#fff"}>
              Baixar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
