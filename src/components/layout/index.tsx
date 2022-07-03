import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
  marginB?: any;
}

export function Layout({ children, marginB }: layoutProps) {
  return (
    <Box w="100%" mx="auto">
      <Box
        maxW="1400px"
        mx="auto"
        w={{ base: "95%", md: "95%", lg: "100%", xl: "85%" }}
      >
        {children}
      </Box>
    </Box>
  );
}
