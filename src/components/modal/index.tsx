import React, { ReactNode } from "react";
import {
  Button,
  useDisclosure,
  Modal as ModalChakra,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface IPropsModal {
  title?: string;
  children: ReactNode;
  onPress: () => void;
  onClose: () => void;
  isOpen: boolean;
  titleButton?: string;
}

export function Modal({
  children,
  title,
  onPress,
  titleButton,
  isOpen,
  onClose,
}: IPropsModal) {
  return (
    <ModalChakra
      size={{ base: "sm", md: "xl" }}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textTransform={"uppercase"}>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button mr={3} variant="ghost" onClick={onClose}>
            Fechar
          </Button>
          <Button bg="#6EDB5C" color={"#fff"} onClick={onPress}>
            {titleButton || "Baixar"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalChakra>
  );
}
