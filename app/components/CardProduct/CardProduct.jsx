import React, { useContext } from "react";
import {
  Box,
  Button,
  Image,
  Badge,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import ComponentContext from "@/Context/ComponentState/ComponentContext";
import { MdAdd, MdRemove } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDisclosure } from "@chakra-ui/react";
const ProductCard = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id, name, status, description, price, existence, image, alt } =
    product;
  const { cartproductcounter, addSelectedProducts, countDown, countUp } =
    useContext(ComponentContext);

  return (
    <>
      <Box
        maxW={["42vw", "null", "30vw", "null", "null", "20vw"]}
        maxH={["90vh", "null", "120vh", "null", "null", "60vh"]}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p="2"
        boxShadow="md"
        onClick={onOpen}
        cursor="pointer"
        transition="all 0.3s"
      >
        <Image src={image} alt={alt} />

        <Box p="2">
          <Box display="flex" flexDirection="row">
            <Box ml={["0.2rem", "null", "null", "null", "null", "1em"]}>
              <Badge
                borderRadius="full"
                px="1"
                colorScheme="teal"
                fontSize={["0.8em", "null", "null", "null", "null", "1em"]}
              >
                {status}
              </Badge>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              ml={["4em", "null", "8em", "null", "4em", "14em"]}
            >
              <AiOutlineShoppingCart fontSize="2em" />
            </Box>
          </Box>

          <Box
            mt={["1"]}
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
            fontSize="sm"
          >
            {name}
          </Box>

          <Box>
            <Text fontSize="xs" color="gray.600">
              {description}
            </Text>
          </Box>

          <Box display="flex" mt="1" alignContent="center" flexDirection="row">
            <Text fontWeight="bold" fontSize="sm" width="30%" mr="2">
              {`$ ${price}`}
            </Text>
            <Text fontSize="xs" color="gray.600" width="60%">
              {existence > 0 ? `${existence} disponibles` : "Agotado"}
            </Text>
          </Box>
        </Box>
      </Box>
      {/* Primer modal: Primer Plano tarjeta */}
      <Modal isOpen={isOpen} onClose={onClose} {...product}>
        <ModalOverlay />
        <ModalContent maxW={["90vw", "null", "90vw", "null", "null", "40vw"]}>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={image} alt={alt} />
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Box
                ml={["1em", "null", "null", "null", "null", "2em"]}
                display="flex"
                alignItems="center"
              >
                <Badge
                  display="flex"
                  borderRadius="2em"
                  colorScheme="teal"
                  fontSize="1.1em"
                >
                  {status}
                </Badge>
              </Box>

              <Box
                mr={["1vw", "null", "1vw", "null", "null", "3vw"]}
                display="flex"
                flexDirection="row"
                alignItems="center"
              >
                <Button onClick={() => countUp(product)}>
                  <MdAdd fontSize="2em" />
                </Button>

                <Text ml="0.4em" fontSize="1.5em">
                  {cartproductcounter}
                </Text>
                <Button ml="0.6em" onClick={() => countDown(product)}>
                  <MdRemove fontSize="2em" />
                </Button>

                <Button
                  ml="2em"
                  color="white"
                  background="#0b60cf"
                  _hover={{ bg: "#1d53e752", color: "#123fbbdf" }}
                  onClick={() => {
                    addSelectedProducts(product);
                    onClose();
                  }}
                >
                  Agregar
                </Button>
              </Box>
            </Box>
            <Text fontSize="1.2rem">{description}</Text>
            <Text fontWeight="bold">{`$ ${price}`}</Text>
            <Text fontSize="sm" color="gray.600">
              {existence > 0 ? `${existence} disponibles` : "Agotado"}
            </Text>
            {/* Agrega aquí más detalles del producto si es necesario */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductCard;
