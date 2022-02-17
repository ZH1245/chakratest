import { Box } from "@chakra-ui/react";
import React from "react";
import NavBar from "./NavBar";

function About() {
  return (
    <Box>
      <header>
        <NavBar />
      </header>
      <Box>About</Box>
    </Box>
  );
}

export default About;
