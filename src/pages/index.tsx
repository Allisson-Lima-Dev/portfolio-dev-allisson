import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import {
  CardAbout,
  Header,
  Layout,
  RowSkills,
  CardSkill,
} from "~/components/index";
import { Particles as configParticles } from "../mocks/particles";
import { Particles as configParticlesSkills } from "../mocks/particlesSkills";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import ImageHome from "~/assets/home.png";
import ImageSobre from "~/assets/Sobre.png";
import ImageSkills from "~/assets/imgSkills.png";
import { DataAboutCard } from "~/mocks/dataCardAbout";
import {
  dataSkills,
  iconsDataSkill,
  dataCardSoftSkill,
} from "~/mocks/dataSkills";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper";

export default function Home() {
  const particlesInit = async (main: Engine) => {
    // console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = async (container: Container | undefined) => {
    // console.log(container);
  };

  return (
    <Box bg="#f8f8f8">
      <Flex
        bg="#0f0f0f"
        h={{ base: "1000px", lg: "100vh" }}
        id="container-home"
        zIndex={1000}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={configParticles()}
        />
        <Layout>
          <Header />
          <Flex
            w="full"
            justifyContent="space-between"
            mt={{ base: "0px", lg: "80px" }}
            flexDir={{ base: "column", lg: "row" }}
          >
            <Box
              mt={{ base: "0px", lg: "100px" }}
              w={{ base: "100%", lg: "42%" }}
              zIndex={2000}
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
                w={{ base: "150px", lg: "193px" }}
                h="50px"
                fontSize={{ base: "17px", md: "20px" }}
                mt="38px"
              >
                Saber Mais
              </Button>
            </Box>
            <Flex zIndex={2000} align="center" justify={"center"}>
              <Image
                src={ImageHome.src}
                alt="Imagem do Allisson"
                // w="100%"
                // h="100%"
              />
            </Flex>
          </Flex>
        </Layout>
      </Flex>
      <Box w="full" mb="80px" mt="-230px">
        <Layout>
          <Flex>
            <Swiper
              style={{ zIndex: 2000 }}
              slidesPerView={3}
              spaceBetween={5}
              // navigation={true}
              breakpoints={{
                1500: {
                  slidesPerView: 3,
                  spaceBetween: 200,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                848: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                648: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                200: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  navigation: false,
                },
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Keyboard, Pagination, Navigation, Autoplay]}
              className="mySwiperAbout"
            >
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
          {/* <Flex
            w="full"
            justify={{ base: "center", lg: "space-between" }}
            align="center"
            // id="ct"
            flexDir={{ base: "column", lg: "row" }}
          >
            {DataAboutCard.slice(0, 3).map((item, idx) => (
              <Box key={idx} zIndex={2000} mt="100px">
                <CardAbout
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </Box>
            ))}
          </Flex> */}
          <Flex
            w="full"
            justify={"space-between"}
            mt="50px"
            flexDir={{ base: "column", lg: "row" }}
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
      <Flex w="full" id="about" zIndex={1000} color="#fff">
        <Particles
          id="tsparticlesSkills"
          init={particlesInit}
          loaded={particlesLoaded}
          options={configParticlesSkills()}
        />
        <Layout>
          <Text fontSize={"40px"} color="#fff" mb="20px" mt="80px">
            Minhas Habilidades
          </Text>
          <Flex
            w="full"
            justify={"space-between"}
            h="full"
            zIndex={2000}
            flexDir={{ base: "column", lg: "row" }}
          >
            <Box w={{ base: "100%", lg: "50%" }} zIndex={2000}>
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
              mb={{ base: "40px", lg: "0" }}
              justify={{ base: "left", lg: "right" }}
              w={{ base: "100%", lg: "70%" }}
              zIndex={2000}
            >
              <Image
                src={ImageSkills.src}
                loading="lazy"
                alt="Image do Sobre de Allisson"
              />
            </Flex>
          </Flex>
          <Text fontSize={"40px"} color="#fff" mb="20px">
            Hard Skills
          </Text>
          <Flex my={{ base: "10px", lg: "80px" }}>
            <Swiper
              style={{ zIndex: 2000 }}
              slidesPerView={7}
              spaceBetween={5}
              // navigation={true}
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
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Keyboard, Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              {iconsDataSkill.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <CardSkill icon={item.icon} title={item.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Flex>
          <Flex>
            <Swiper
              style={{ zIndex: 2000 }}
              slidesPerView={3}
              spaceBetween={5}
              // navigation={true}
              breakpoints={{
                1500: {
                  slidesPerView: 3,
                  spaceBetween: 200,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                848: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                648: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                200: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  navigation: false,
                },
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Keyboard, Pagination, Navigation, Autoplay]}
              className="mySwiperAbout"
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
        </Layout>
      </Flex>
    </Box>
  );
}
