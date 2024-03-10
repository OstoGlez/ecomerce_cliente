"use client";
import React from "react";
import { Box, Divider, Text } from "@chakra-ui/react";
import { footer, footerp } from "../Footer/Footer.js";
import { MdFacebook, MdOutlineWhatsapp } from "react-icons/md";
function Footer() {
  return (
    <Box
      bg="tropical.sky"
      w="100vw"
      h={["10vh", "null", "18vh"]}
      display="flex"
      flexDirection="column"
    >
      <Box
        display="flex"
        flexDirection="row"
        mt={["1rem", "null", "0.6rem", "null", "null", "2.5rem"]}
        justifyContent="space-around"
        alignItems="center"
      >
        <Divider
          orientation="horizontal"
          ml={["1rem"]}
          w={["8rem", "null", "18rem", "null", "null", "40rem"]}
        />

        <MdOutlineWhatsapp fontSize="1.2rem" />

        <MdFacebook fontSize="1.2rem" />

        <Divider
          orientation="horizontal"
          ml={["1rem"]}
          w={["8rem", "null", "18rem", "null", "null", "40rem"]}
        />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        justifyItems="center"
        mt={["0.7rem", "null", "0.7rem", "null", "null", "4.5rem"]}
      >
        <Text as="p" style={footerp}>
          &copy; 2024.
          <span style={{ fontFamily: "Segoe Print", fontStyle: "italic" }}>
            Tropical Shop
          </span>
          . Todos los derechos reservados.
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
