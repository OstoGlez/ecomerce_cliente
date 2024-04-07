"use client";
import { Image, Tr, Td } from "@chakra-ui/react";

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
        <Td> {name}</Td>
        <Td>{`${price} $`}</Td>
        <Td>{count}</Td>
        <Td>{`${partial} $`}</Td>
      </Tr>
    </>
  );
}

export default ModalTable;
