import React from "react";
import { Button, HStack, space } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={4}  spacing={5} shadow={"base"} bgColor={"blackAlpha.900"} justifyContent={"center"}>
      <Button variant={"unstyled"}  color={"whiteAlpha.900"}>
        <Link to="/">Home</Link>
      </Button>

      <Button variant={"unstyled"} color={"whiteAlpha.900"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>

      <Button variant={"unstyled"} color={"whiteAlpha.900"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
