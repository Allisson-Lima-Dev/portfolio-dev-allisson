import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Router from "next/router";
import Link from "next/link";
import Logo from "~/assets/logo.png";
import { Icon } from "@iconify/react";

interface IPropsHeader {
  sectionMenu?: number;
}

export function Header({ sectionMenu }: IPropsHeader) {
  const asPath = Router.asPath;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const routesPath = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Quem somos",
      path: "",
    },
    {
      title: "Serviços",
      path: "",
    },
    {
      title: "Tecnologia",
      path: "",
    },
    {
      title: "Contato",
      path: "",
    },
  ];

  const [hide, setHide] = useState<string>("flex");
  const [active, setActive] = useState(false);
  useEffect(() => {
    let lastScrollTop = 0;
    window.addEventListener(
      "scroll",
      function () {
        if (scrollY === lastScrollTop) return;
        setHide(scrollY < lastScrollTop ? "flex" : "none");
        lastScrollTop = scrollY;
      },
      true
    );
  }, []);

  const menu = ["Home", "Sobre", "Skills", "Projetos", "Contact"];
  return (
    <Flex
      display={hide}
      zIndex={isOpen ? 1000 : 2000}
      position="fixed"
      bg="#0f0f0f73"
      left={"50%"}
      top={"0"}
      transform="translate(-50%, 0)"
      w="full"
      // transition="background-color 200ms linear"
    >
      <Flex
        maxW="1420px"
        mx="auto"
        w={{ base: "full", md: "95%", lg: "100%", xl: "85%" }}
        py={{ base: "10px", md: "15px" }}
        // color="#fff"
        justify="space-between"
        align={"center"}
        px={{ base: "10px", md: "40px", xl: "20px" }}
        // mt="35px"
        // mb={{ base: "15px", lg: "0" }}
      >
        <Flex align={"center"}>
          <Image src={Logo.src} alt="logo" w={{ base: "30px", lg: "50px" }} />
          <Text
            fontSize={{ base: "20px", lg: "30px" }}
            fontWeight="bold"
            color={"#FFF"}
            ml="10px"
          >
            ALLISSON
          </Text>
        </Flex>
        <Flex
          w="35%"
          justifyContent={"space-between"}
          fontSize="20px"
          display={{ base: "none", lg: "flex" }}
        >
          {menu.map((item, idx) => (
            <Link key={item} href={"#project"}>
              <Text color={sectionMenu === idx ? "#d41e1e" : "#fff"} w="full">
                {item}
              </Text>
            </Link>
          ))}
        </Flex>
        <Box display={{ base: "flex", lg: "none" }} zIndex={2000} mr="10px">
          <Icon icon="gg:menu" onClick={onOpen} color="#ffff" width={"30px"} />
          {/* <HiOutlineMenuAlt2 onClick={onOpen} size={30} color="#ffff" /> */}
        </Box>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={"#0f0f0f"} color="#fff" zIndex={2000}>
            <DrawerCloseButton />
            <DrawerHeader alignItems={"center"}>
              <Flex align={"center"}>
                <Image src={Logo.src} alt="Icone Logo" w="30px" />
              </Flex>
            </DrawerHeader>

            <DrawerBody>
              {routesPath.map((item, index) => (
                <Flex
                  align="center"
                  // w="80%"
                  p="8px"
                  borderRadius={"5px"}
                  my="5px"
                  key={index}
                  color={item.path === asPath ? "#ffffff" : "#fff"}
                  bg={item.path === asPath ? "#6EDB5C" : "transparent"}
                >
                  <Box ml="10px" fontSize={"18px"}>
                    <Link href={"#project"}>{item.title}</Link>
                  </Box>
                </Flex>
              ))}
            </DrawerBody>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
}
