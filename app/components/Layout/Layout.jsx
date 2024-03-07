"use client";
import { Box } from "@chakra-ui/react";
import HeaderLayout from "../headerlayout/HeaderLayout";
const Layout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="93vh">
      <HeaderLayout />
      <Box as="main" flex="1" p="4">
        {children}
      </Box>
      <Box
        as="footer"
        width="100%"
        height="80%"
        bg="tropical.sky"
        color="white"
        p="10"
      >
        {/* Aquí puedes colocar tu footer */}
      </Box>
    </Box>
  );
};

export default Layout;
