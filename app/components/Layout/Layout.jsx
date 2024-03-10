"use client";
import { Box } from "@chakra-ui/react";
import HeaderLayout from "../headerlayout/HeaderLayout";
import Footer from "../Footer/Footer.jsx";
/*const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};*/

const Layout = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      w="100vw"
      height={["93vh", "93.5vh", "87vh", "100vh", "100vh", "100vh"]}
    >
      <HeaderLayout />
      <Box as="main" flex="1" p="4">
        {children}
      </Box>
      <Box as="footer" display="flex" color="white">
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
