"use client";
import React, { useState, useRef, useContext } from "react";
import {
  Box,
  Text,
  Badge,
  Image,
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
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  TableContainer,
} from "@chakra-ui/react";

function ModalTable({ product }) {
  const { id, name, count, image, price, partial } = product;
  return (
    <>
      <Tr fontSize="0.8em">
        <Td p="0">
          <Image
            src={image}
            alt="alt"
            w={["5em", "null", "6em", "null", "null", "5em"]}
          />
        </Td>
        <Td p="0"> {name}</Td>
        <Td isNumeric pt="0" pb="0" pl="0">
          {price}
        </Td>
        <Td p="0">{count}</Td>
        <Td p="0">{partial}</Td>
      </Tr>
    </>
  );
}

export default ModalTable;
