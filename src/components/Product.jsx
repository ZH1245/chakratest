import { Box } from "@chakra-ui/react";
import React from "react";
import NavBar from "./NavBar";

function Product() {
  return (
    <Box>
      <header>
        <NavBar />
      </header>
      <Box>Products Will Appear Here</Box>
    </Box>
  );
}

export default Product;
