"use client";
import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    isOpen: isLoginModalOpen,
    onOpen: onLoginModalOpen,
    onClose: onLoginModalClose,
  } = useDisclosure();
  const {
    isOpen: isRegisterModalOpen,
    onOpen: onRegisterModalOpen,
    onClose: onRegisterModalClose,
  } = useDisclosure();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openLoginModal = () => {
    onLoginModalOpen();
    toggleMenu();
  };

  const openRegisterModal = () => {
    onRegisterModalOpen();
    onLoginModalClose();
  };

  return (
    <Box as="header" bg="tropical.sky" color="white" p="4">
      <Flex justify="space-between" align="center">
        <Box>
          <Image src="/logoro.png" alt="Logo" width={100} height={90} />
        </Box>
        <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon fontSize="30px" />}
            color="white"
            onClick={toggleMenu}
            aria-label="Open Menu"
            variant="ghost"
            _hover={{ bg: "#298fcab7" }}
          >
            Menú
          </MenuButton>
          <MenuList color="black">
            <MenuItem onClick={openLoginModal}>Inicio</MenuItem>
            <MenuItem>Configuracion</MenuItem>
            <MenuItem>salir</MenuItem>
          </MenuList>
        </Menu>

        <AiOutlineShoppingCart fontSize="1.8em" ml="3em" />
      </Flex>
      {/* Primer modal: Iniciar Sesión */}
      <Modal isOpen={isLoginModalOpen} onClose={onLoginModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Iniciar Sesión</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Correo electrónico" />
            <Input placeholder="Contraseña" type="password" mt={4} />
            <Text
              color="blue"
              mt={4}
              onClick={openRegisterModal}
              _hover={{
                color: "blue.500",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.836)",
              }}
            >
              ¿No tienes cuenta? Regístrate
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onLoginModalClose}>
              Iniciar Sesión
            </Button>
            <Button variant="ghost" onClick={onLoginModalClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Segundo modal: Registrarse */}
      <Modal isOpen={isRegisterModalOpen} onClose={onRegisterModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registrarse</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Correo electrónico" />
            <Input placeholder="Contraseña" type="password" mt={4} />
            <Input placeholder="Confirmar contraseña" type="password" mt={4} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onRegisterModalClose}>
              Registrarse
            </Button>
            <Button variant="ghost" onClick={onRegisterModalClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Header;
