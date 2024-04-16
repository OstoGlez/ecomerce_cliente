import { useToast } from "@chakra-ui/react";
function CustomToast({ props }) {
  toast = useToast();
  const { title, description, position, status, duration, isClosable } = props;
  console.log("dentro del Custom", title);
  toast({
    title,
    description,
    position,
    status,
    duration,
    isClosable,
  });
}

export default CustomToast;
