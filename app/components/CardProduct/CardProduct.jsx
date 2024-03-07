import { Box, Image, Badge, Text } from "@chakra-ui/react";
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
      maxW={isMagnified ? "80vw" : "40vw"}
      maxH={isMagnified ? "90vh" : "50vh"}
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
