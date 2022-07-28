/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
  Textarea,
  Input,
} from "@chakra-ui/react";
import {
  CardAbout,
  Header,
  Layout,
  CardSkill,
  CardCertificate,
  Swiper,
  SwiperSlide,
  CardProject,
  // Input,
} from "~/components/index";
import { Particles as configParticles } from "../mocks/particles";
import { Particles as configParticlesSkills } from "../mocks/particlesSkills";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import ImageHome from "~/assets/home.png";
import ImageSobre from "~/assets/Sobre.png";
import ImageSkills from "~/assets/imgSkills.png";
import Whatssap from "~/assets/whatssap.png";
import Contact from "~/assets/contact.png";
import { DataAboutCard } from "~/mocks/dataCardAbout";
import {
  iconsDataSkill,
  dataCardSoftSkill,
  dataCertificate,
} from "~/mocks/dataSkills";
import Link from "next/link";
import useScrollSpy from "react-use-scrollspy";

export default function Home() {
  const particlesInit = async (main: Engine) => {
    // console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = async (container: Container | undefined) => {
    // console.log(container);
  };
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  });

  return (
    <Box bg="#f8f8f8">
      <Link href="https://wa.me/+5598999682402?text=Olá+Allisson,+gostei+do+seu+Portfólio!+Gostaria+de+saber+mais+sobre+você!&app_absent=0">
        <Image
          src={Whatssap.src}
          alt="Icone do WhatsApp"
          w={{ base: "40px", lg: "50px" }}
          pos="fixed"
          right="2"
          bottom={{ base: "10px", md: "20px" }}
          zIndex="1000"
          cursor="pointer"
        />
      </Link>
      <Header activeSection={activeSection} />
      <Flex
        bg="#0f0f0f"
        h={{ base: "1000px", lg: "100vh" }}
        id="home"
        zIndex={1000}
        ref={sectionRefs[0]}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={configParticles()}
        />
        <Layout>
          <Flex
            w="full"
            justifyContent="space-between"
            mt={{ base: "70px", lg: "80px" }}
            flexDir={{ base: "column", lg: "row" }}
          >
            <Box
              mt={{ base: "0px", lg: "100px" }}
              w={{ base: "100%", lg: "42%" }}
              zIndex={1000}
            >
              <Text fontSize={{ base: "25px", md: "37px" }} color="#6EDB5C">
                Olá,
              </Text>
              <Text
                fontSize={{ base: "30px", md: "50px" }}
                color="#fff"
                id="name"
              >
                Meu nome é <span style={{ color: "#6EDB5C" }}>Allisson</span>
              </Text>
              <Text
                fontSize={{ base: "17px", md: "22px" }}
                w="80%"
                color="#fff"
              >
                Sou desenvolvedor full stack, minha expertise é o{" "}
                <span style={{ color: "#6EDB5C" }}>front end</span> e atualmente
                estudando UI/UX Designer.
              </Text>
              <Button
                bg="#6EDB5C"
                color={"#fff"}
                w={{ base: "130px", lg: "193px" }}
                // h="50px"
                fontSize={{ base: "17px", md: "20px" }}
                mt="38px"
              >
                Saber Mais
              </Button>
            </Box>
            <Flex zIndex={2000} align="center" justify={"center"}>
              <Image src={ImageHome.src} alt="Imagem do Allisson" />
            </Flex>
          </Flex>
        </Layout>
      </Flex>
      <Box w="full" mb="80px" mt="-230px" ref={sectionRefs[1]} id="about">
        <Layout>
          <Flex>
            <Swiper slidesPerView={3} spaceBetween={5}>
              {DataAboutCard.slice(0, 3).map((item, idx) => (
                <SwiperSlide key={idx}>
                  <CardAbout
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Flex>
          <Flex
            w="full"
            justify={"space-between"}
            mt="50px"
            flexDir={{ base: "column", lg: "row" }}
            id={"1"}
          >
            <Box>
              <Image
                src={ImageSobre.src}
                w="100%"
                h="100%"
                alt="Image do Sobre de Allisson"
              />
            </Box>
            <Box w={{ base: "100%", lg: "50%" }}>
              <Text fontSize={"40px"} color={"#6EDB5C"}>
                Sobre
              </Text>
              <Text fontSize={"19px"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis alias inventore ullam. Nemo sed inventore illo repellat
                mollitia odit. Mollitia aspernatur placeat ducimus deleniti
                assumenda nulla tempora, saepe dicta rem! Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Facere totam repellat
                blanditiis sit, dolores fugiat! Dolore quos libero animi vitae
                sunt veniam doloremque, delectus hic totam velit quasi. Ab,
                molestiae.
              </Text>
              <Flex w="full" justify={"right"}>
                <Button
                  bg="#6EDB5C"
                  color={"#fff"}
                  w="164px"
                  h="41px"
                  fontSize={"18px"}
                  mt="42px"
                >
                  Baixar CV
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Layout>
      </Box>
      <Flex w="full" id="skill" color="#fff">
        <Particles
          id="tsparticlesSkills"
          init={particlesInit}
          loaded={particlesLoaded}
          options={configParticlesSkills()}
        />
        <Layout>
          <Text fontSize={"40px"} color={"#fff"} mb="20px" mt="80px">
            Minhas Habilidades
          </Text>
          <Flex
            ref={sectionRefs[2]}
            w="full"
            justify={"space-between"}
            // h="full"
            // zIndex={1000}
            flexDir={{ base: "column", lg: "row" }}
          >
            <Box w={{ base: "100%", lg: "50%" }} zIndex={1000}>
              <Text fontSize={"19px"}>
                Durante minha caminhada aprendi habilidades de Soft Skill, uma
                que destaco como principal a{" "}
                <span style={{ color: "#6EDB5C" }}>Comunicação</span> que é
                capacidade de explicar ideias ou métodos de trabalho com
                clareza, fazer e responder perguntas de forma produtiva em um
                ambiente de grupo e ajudar a reduzir conflitos por meio de um
                diálogo respeitoso, é algo importante para ter sucesso na
                codificação
              </Text>
              <Button
                bg="#6EDB5C"
                color={"#fff"}
                w={{ base: "150px", lg: "153px" }}
                h="45px"
                fontSize={{ base: "17px", md: "20px" }}
                mt="38px"
              >
                Saber Mais
              </Button>
            </Box>
            <Flex
              mt={{ base: "40px", lg: "0" }}
              mb={{ base: "10px", lg: "0" }}
              justify={{ base: "left", lg: "right" }}
              w={{ base: "100%", lg: "70%" }}
            >
              <Image
                src={ImageSkills.src}
                loading="lazy"
                alt="Image do Sobre de Allisson"
              />
            </Flex>
          </Flex>
          <Text fontSize={"40px"} color="#fff" mb="-20px" mt="20px">
            Metódos
          </Text>
          <Flex>
            <Swiper
              //  style={{ zIndex: 1000 }}
              slidesPerView={3}
              spaceBetween={5}
            >
              {dataCardSoftSkill.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <CardAbout
                    type="skill"
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Flex>
          <Text fontSize={"40px"} color="#fff" mb="10px">
            Hard Skills
          </Text>
          <Flex my={{ base: "10px", lg: "80px" }}>
            <Swiper
              className="mySwiper"
              // style={{ zIndex: 1000 }}
              slidesPerView={7}
              spaceBetween={5}
              breakpoints={{
                1024: {
                  slidesPerView: 7,
                  spaceBetween: 50,
                },
                848: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
                200: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                  navigation: false,
                },
              }}
            >
              {iconsDataSkill.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <CardSkill icon={item.icon} title={item.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Flex>
          <Flex
            w="full"
            justifyContent={"space-between"}
            flexWrap="wrap"
            gap={5}
            mb="50px"
          >
            {dataCertificate &&
              dataCertificate.map((item, idx) => (
                <CardCertificate
                  key={idx}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  institution={item.institution}
                />
              ))}
          </Flex>
          <Flex
            w="full"
            // justifyContent={"space-between"}
            flexWrap="wrap"
            gap={5}
            mb="50px"
            ref={sectionRefs[3]}
          >
            <Box id="project">
              <Text fontSize={"40px"} color="#fff" mt="10px">
                Projetos
              </Text>
              <Text>
                Para saber mais a respeito dos projetos abaixo clique em "Mais
                Detalhes" para visualizar o repositório do Projeto.
              </Text>
            </Box>
            <Tabs variant="unstyled" w={"full"}>
              <TabList flexWrap={"wrap"} mb="20px">
                {["Front End", "Mobile", "Back End", "UI/UX Desgin"].map(
                  (item, idx) => (
                    <Tab
                      zIndex={1000}
                      key={idx}
                      // borderRadius="5px"
                      my="5px"
                      _selected={{
                        color: "white",
                        borderBottom: "2px solid #6cc55d",
                        // bg: "#6cc55d",
                        // borderRadius: "5px",
                      }}
                    >
                      {item}
                    </Tab>
                  )
                )}
              </TabList>
              <TabPanels w="full">
                <TabPanel>
                  <Swiper
                    className="mySwiperProject"
                    // style={{ zIndex: 1000 }}
                    slidesPerView={3}
                  >
                    {Array.from({ length: 10 }).map((_, idx) => (
                      <SwiperSlide key={idx}>
                        <CardProject />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </TabPanel>
                <TabPanel>
                  <Swiper
                    className="mySwiperProject"
                    // style={{ zIndex: 1000 }}
                    slidesPerView={3}
                  >
                    {Array.from({ length: 10 }).map((_, idx) => (
                      <SwiperSlide key={idx}>
                        <CardProject />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
          <Flex justify={"center"} mb="50px">
            <Box>
              <Text fontSize={"40px"} color="#fff" my="10px">
                Entre em Contato
              </Text>
              <Input
                name="name"
                placeholder="nome"
                w="full"
                // variant="flushed"
                my="5px"
              />
              <Input
                name="email"
                placeholder="Email"
                w="full"
                // variant="flushed"
                my="5px"
              />
              <Textarea my="5px" />
              <Button
                bg="#6EDB5C"
                color={"#fff"}
                w={{ base: "full", md: "150px", lg: "153px" }}
                h="45px"
                fontSize={{ base: "17px", md: "20px" }}
                mt="38px"
              >
                Enviar
              </Button>
            </Box>
          </Flex>
        </Layout>
      </Flex>
    </Box>
  );
}
