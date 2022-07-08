// /* eslint-disable react-hooks/rules-of-hooks */
import { useMediaQuery } from "@chakra-ui/react";
export function Particles() {
  const [Lg, md] = useMediaQuery(["(min-width: 990px)", "(max-width: 690px)"]);
  const configParticlesSkills = {
    fullScreen: { enable: false, zIndex: 0 },
    fpsLimit: 130,
    // background: {
    //   image:
    //     "url(https://img4.goodfon.com/original/1920x1080/d/b1/abstract-dark-blue-polygonal-background-abstraktsiia-geometr.jpg?d=1)",
    // },
    interactivity: {
      events: {
        resize: true,
      },
    },
    particles: {
      color: { value: "#ffffff" },
      move: {
        enable: true,
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        animation: {
          enable: true,
          speed: 0.05,
          sync: true,
          count: 1,
        },
        value: {
          min: 0,
          max: 0.5,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
  };

  return configParticlesSkills;
}
