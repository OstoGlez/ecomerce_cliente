"use client";
import { useContext } from "react";
import ComponentContext from "@/Context/ComponentState/ComponentContext";
import { Image, Tr, Td } from "@chakra-ui/react";
import { BsCartX, BsCartDash, BsCartPlus } from "react-icons/bs";
function ModalTable({ product }) {
  const { id, name, count, image, price, partial } = product;
  const { removProdCart } = useContext(ComponentContext);
  const remove = () => {
    console.log("Removido");
    removProdCart(id);
  };

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
        <Td>
          <BsCartPlus fontSize="2em" color="#0842c0d2" />
        </Td>
        <Td>
          <BsCartDash fontSize="2em" color="#0842c0d2" />
        </Td>
        <Td onClick={remove}>
          <BsCartX fontSize="2em" color="#f30909d3" />
        </Td>
      </Tr>
    </>
  );
}

export default ModalTable;
