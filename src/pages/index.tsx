import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { CardAbout, Header, Layout } from "~/components/index";
import { Particles as configParticles } from "../mocks/particles";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import ImageHome from "/public/assets/home.png";
import ImageSobre from "/public/assets/sobre.png";
import { DataAboutCard } from "~/mocks/dataCardAbout";

export default function Home() {
  const particlesInit = async (main: Engine) => {
    // console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = async (container: Container | undefined) => {
    // console.log(container);
  };
  return (
    <Box>
      <Flex bg="#2F2E2E" h="100vh" id="container-home" zIndex={1000}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={configParticles()}
        />
        <Layout>
          <Header />
          <Flex w="full" justifyContent="space-between" mt="80px">
            <Box mt="100px" w="42%" zIndex={2000}>
              <Text fontSize={"37px"} color="#6EDB5C">
                Olá,
              </Text>
              <Text fontSize={"50px"} color="#fff" id="name">
                Meu nome é <span style={{ color: "#6EDB5C" }}>Allisson</span>
              </Text>
              <Text fontSize={"22px"} w="80%" color="#fff">
                Sou desenvolvedor full stack, minha expertise é o{" "}
                <span style={{ color: "#6EDB5C" }}>front end</span> e atualmente
                estudando UI/UX Designer.
              </Text>
              <Button
                bg="#6EDB5C"
                color={"#fff"}
                w="193px"
                h="50px"
                fontSize={"20px"}
                mt="38px"
              >
                Saber Mais
              </Button>
            </Box>
            <Box zIndex={1000}>
              <Image
                src={ImageHome.src}
                alt="Imagem do Allisson"
                w="100%"
                h="100%"
              />
            </Box>
          </Flex>
        </Layout>
      </Flex>
      <Box w="full" mb="80px">
        <Layout>
          <Flex w="full" justify={"space-between"} id="ct">
            {DataAboutCard.map((item, idx) => (
              <Box key={idx} zIndex={2000} mt="100px">
                <CardAbout
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </Box>
            ))}
          </Flex>
          <Flex w="full" justify={"space-between"} mt="50px">
            <Box>
              <Image src={ImageSobre.src} w="100%" h="100%" />
            </Box>
            <Box w="50%">
              <Text fontSize={"40px"} color="#6EDB5C">
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
      <Box bg="#2F2E2E" w="full" id="about">
        <Layout>
          <Box h="100vh">
            <Text>Habilidades</Text>
          </Box>
        </Layout>
      </Box>
    </Box>
  );
}
