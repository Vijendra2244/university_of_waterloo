import { Button, Flex } from "@chakra-ui/react";

export default function ButtonCom({ text }) {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Button
        px={4}
        fontSize={"sm"}
        rounded={"full"}
        bg={"green"}
        color={"white"}
        position={"absolute"}
        bottom={"20%"}
        left={"90%"}
        boxShadow={
          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
        }
        _hover={{
          bg: "green.500",
        }}
        _focus={{
          bg: "blue.500",
        }}
      >
        {text}
      </Button>
    </Flex>
  );
}
