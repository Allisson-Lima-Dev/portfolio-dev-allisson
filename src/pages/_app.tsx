import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LottieLoading from "~/lottie/loading.json";
import Lottie from "react-lottie";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    setTimeout(() => {
      setShowChild(true);
    }, 3000);
  }, []);

  if (!showChild) {
    return (
      <Flex h="100vh" bg="#0f0f0f" color="#fff" justify="center" align="center">
        <Lottie options={defaultOptions} height={400} width={400} />
      </Flex>
    );
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    );
  }
}

export default MyApp;
