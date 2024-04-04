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

function ModalTable() {
  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Listado de Productos seleccionados</TableCaption>

          <Tbody>
            <Tr>
              <Td>
                <Image src="/canela.png" alt="alt" w="5em" />
              </Td>
              <Td>Canela en Rama</Td>
              <Td isNumeric>12.00</Td>
            </Tr>
            <Tr>
              <Td>
                <Image src="/aceite.png" alt="alt" w="5em" />
              </Td>
              <Td>Aceite de Comer</Td>
              <Td isNumeric>19.00</Td>
            </Tr>
            <Tr>
              <Td>
                <Image src="/salchichas.png" alt="alt" w="5em" />
              </Td>
              <Td>Salchichas de Cerdo</Td>
              <Td isNumeric>14.00</Td>
            </Tr>
            <Tr>
              <Td>
                <Image src="/pudin.png" alt="alt" w="5em" />
              </Td>
              <Td>Pudin de Yogurt</Td>
              <Td isNumeric>7.00</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ModalTable;
