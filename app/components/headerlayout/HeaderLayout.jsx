"use client";
import { useState, useRef, useContext } from "react";
import {
  Box,
  Text,
  Badge,
  Flex,
  IconButton,
  Icon,
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
import ComponentContext from "@/Context/ComponentState/ComponentContext";
import { HamburgerIcon } from "@chakra-ui/icons";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { customModal } from "./hederlayout.js";

const Header = () => {
  const { reducecount } = useContext(ComponentContext);
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

  const menuRef = useRef();

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
    <Box as="header" bg="tropical.sky" color="white" p="1.5">
      <Flex justify="space-between" align="center">
        <Box ml={["2em", "null", "4em", "null", "null", "null"]}>
          <Text
            fontSize={["1.2rem", "1.6rem", "1.5rem", "null", "null", "2.6rem"]}
            style={{
              fontFamily: "Segoe Print",
              fontStyle: "italic",
              fontWeight: "bold",
              textShadow: "2px 1px 3px #1d1b1b",
            }}
          >
            Tropical Shop
          </Text>
        </Box>

        <Box mr={["1em", "null", "2em", "null", "null", "2em"]} display="flex">
          <Box
            display="flex"
            alignItems="center"
            mr={["1em", "null", "1.5em", "2em", "null", "null"]}
          >
            <Badge
              display="flex"
              borderRadius="full"
              color="white"
              px="0.45em"
              background="rgba(236, 27, 27, 1)"
              fontSize="0.8em"
              position="absolute"
              zIndex="2"
              top="5px"
              right="86px"
            >
              {reducecount}
            </Badge>
            <Icon
              as={AiOutlineShoppingCart}
              boxSize={[8, "null", 8, "null", "null", "3.4em"]}
              position="relative"
            />
          </Box>
          <Box display="flex" alignItems="center">
            <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon fontSize="50px" />}
                color="white"
                onClick={toggleMenu}
                aria-label="Open Menu"
                variant="ghost"
                _hover={{ bg: "rgba(0, 0, 0, 0.1)" }}
                _focus={{ outline: "none" }}
                _active={{ bg: "transparent" }}
                onMouseLeave={(e) => e.target.blur()}
              >
                Menú
              </MenuButton>
              <MenuList color="white" fontWeight="bold" background="#2196f3">
                <MenuItem onClick={openLoginModal} background="#298fca0">
                  Inicio
                </MenuItem>
                <MenuItem background="#298fca0">salir</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Flex>
      {/* Primer modal: Iniciar Sesión */}
      <Modal isOpen={isLoginModalOpen} onClose={onLoginModalClose}>
        <ModalOverlay />
        <ModalContent width="24em">
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
        <ModalContent width="24em">
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
