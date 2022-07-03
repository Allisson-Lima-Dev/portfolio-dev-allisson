import React from "react";
import { Box } from "@chakra-ui/react";
import { Particles as configParticles } from "../mocks/particles";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

export default function Home() {
  const particlesInit = async (main: Engine) => {
    // console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = async (container: Container | undefined) => {
    // console.log(container);
  };
  return (
    <Box bg="#2F2E2E" h="100vh">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        style={{ width: "100%", height: "100%", position: "absolute" }}
        options={configParticles()}
      />
      <div>index</div>
      <div>index</div>
      <div>index</div>
    </Box>
  );
}
