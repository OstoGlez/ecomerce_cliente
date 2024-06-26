"use client";
import React from "react";
import {
  Box,
  Divider,
  Text,
  Icon,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

function Basic() {
  const { getDisclosureProps, getButtonProps } = useDisclosure();

  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();
  return (
    <>
      <Button {...buttonProps}>Toggle Me</Button>
      <Text {...disclosureProps} mt={4}>
        This text is being visibly toggled hidden and shown by the button.
        <br />
        (Inspect these components to see the rendered attributes)
      </Text>
    </>
  );
}
export default Basic;
