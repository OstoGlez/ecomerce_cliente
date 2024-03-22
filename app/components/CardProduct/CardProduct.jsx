import React, { useState } from "react";
import {
  Box,
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
import { MdAdd, MdRemove } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
const ProductCard = ({ product }) => {
  const { id, name, status, description, price, existence, image, alt } =
    product;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Box
        maxW={["42vw", "null", "30vw", "null", "null", "20vw"]}
        maxH={["90vh", "null", "120vh", "null", "null", "50vh"]}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p="2"
        boxShadow="md"
        onClick={handleToggleModal}
        cursor="pointer"
        transition="all 0.3s"
      >
        <Image src={image} alt={alt} />

        <Box p="2">
          <Box display="flex" flexDirection="row">
            <Box ml={["0.2rem", "null", "null", "4em", "4em", "2em"]}>
              <Badge
                borderRadius="full"
                px="1"
                colorScheme="teal"
                fontSize={["0.8em", "null", "null", "4em", "4em", "1.2em"]}
              >
                {status}
              </Badge>
            </Box>

            <Box display="flex" alignItems="center" ml="1rem">
              <AiOutlineShoppingCart
                fontSize={["2em", "null", "null", "null", "null", "7em"]}
              />
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

      <Modal isOpen={isModalOpen} onClose={handleToggleModal}>
        <ModalOverlay />
        <ModalContent maxW={["90vw", "null", "90vw", "null", "null", "45vw"]}>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={image} alt={alt} />
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
            >
              <Box ml={["1em", "null", "null", "null", "null", "1em"]}>
                <Badge
                  display="flex"
                  borderRadius="2em"
                  colorScheme="teal"
                  fontSize="1.1em"
                >
                  {status}
                </Badge>
              </Box>
              <Box boxSize="1em"></Box>
              <Box>
                <AiOutlineShoppingCart fontSize="3em" />
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

/*import { Box, Image, Badge, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const { id, name, status, description, price, existence, image, alt } =
    product;
  const [isMagnified, setIsMagnified] = useState(false);

  const handleToggleMagnify = () => {
    setIsMagnified(!isMagnified);
  };

  return (
    <Box
      maxW={
        isMagnified
          ? ["70vw", "null", "null", "null", "null", "50vw"]
          : ["42vw", "null", "null", "null", "null", "20vw"]
      }
      maxH={
        isMagnified
          ? ["130vw", "null", "null", "null", "null", "80vw"]
          : ["90vw", "null", "null", "null", "null", "50vw"]
      }
      borderWidth="1px"
      borderRadius={isMagnified ? "none" : "lg"}
      overflow="hidden"
      p="2"
      boxShadow="md"
      onClick={handleToggleMagnify}
      cursor="pointer"
      transition="all 0.3s"
    >
      <Image src={image} alt={alt} />

      <Box p="2">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="1" colorScheme="teal" fontSize="0.8em">
            {status}
          </Badge>
        </Box>

        <Box
          mt="1"
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
  );
};

export default ProductCard;
//modal + -
 <Box marginLeft={["4rem", "null", "null", "null", "null", "9em"]}>
                <MdRemove fontSize="2em" />
              </Box>
              <Box marginLeft="2rem">
                <MdAdd fontSize="2em" />
              </Box>
//vista normal + -
<Box ml={["1rem", "null", "null", "null", "null", "8em"]}>
              <MdRemove />
            </Box>
            <Box ml={["1rem", "null", "null", "null", "null", "2em"]}>
              <MdAdd />
            </Box>

*/
