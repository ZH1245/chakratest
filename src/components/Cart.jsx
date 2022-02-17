import { Box } from "@chakra-ui/react";
import React from "react";
import NavBar from "./NavBar";

function Cart() {
  return (
    <Box>
      <header>
        <NavBar />
      </header>
      <Box>CART</Box>
    </Box>
  );
}

export default Cart;
