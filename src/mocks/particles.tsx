// /* eslint-disable react-hooks/rules-of-hooks */
import { useMediaQuery } from "@chakra-ui/react";
export function Particles() {
  const [Lg, md] = useMediaQuery(["(min-width: 990px)", "(max-width: 690px)"]);
  const configParticles = {
    fullScreen: { enable: false, zIndex: 0 },
    fpsLimit: 130,
    interactivity: {
      events: {
        onClick: {
          // enable: true,
          // mode: "push",
        },
        onHover: {
          // enable: true,
          // mode: "repulse",
        },
        // resize: true,
      },
      modes: {
        push: {
          quantity: 8,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.6,
        width: 3,
      },
      collisions: {
        // enable: true,
      },
      move: {
        enable: true,
        // outModes: {
        //   default: "bounce",
        // },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          // enable: true,
          area: 800,
        },
        value: !Lg ? (md ? 80 : 60) : 250,
      },
      opacity: {
        value: !Lg ? (md ? 0.3 : 0.4) : 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 2, max: 7 },
      },
    },
    // detectRetina: true,
  };
  return configParticles;
}
