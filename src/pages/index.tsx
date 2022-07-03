import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { CardAbout, Header, Layout } from "~/components/index";
import { Particles as configParticles } from "../mocks/particles";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import ImageHome from "/public/assets/home.png";
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
          <Flex w="full" justify={"space-between"} id="ct">
            {DataAboutCard.map((item, idx) => (
              <Box
                key={idx}
                zIndex={2000}
                mt="100px"
                id={idx === 1 ? "card" : ""}
              >
                <CardAbout
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </Box>
            ))}
          </Flex>
        </Layout>
      </Flex>
      <Box h="100vh" w="full">
        <Layout>
          <Text>Ola</Text>
        </Layout>
      </Box>
    </Box>
  );
}
