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
            <Tr fontSize="0.8em">
              <Td p="0">
                <Image
                  src="/canela.png"
                  alt="alt"
                  w={["5em", "null", "6em", "null", "null", "5em"]}
                />
              </Td>

              <Td p="0"> Canela en Rama</Td>

              <Td isNumeric pt="0" pb="0" pl="0">
                12.00
              </Td>
              <Td p="0">Cantidad: 3</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th display="flex" alignContent="flex-end">
                <Box>
                  <Text fontWeight="bold">
                    Total
                    <Badge ml="1" colorScheme="green">
                      New
                    </Badge>
                  </Text>
                </Box>
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}

export default ModalTable;
