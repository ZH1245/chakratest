import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const handleSubmit = (e) => {
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    e.preventDefault();
  };
  return (
    <Box>
      <header>
        <NavBar />
      </header>
      <Box align="center">
        <Box maxW={"md"} justify="center" align="center">
          <Box m={4}>
            <Text fontSize="4xl" letterSpacing={5} fontFamily={"fantasy"}>
              Login
            </Text>
            <Divider />
          </Box>
          <form onSubmit={(e) => handleSubmit(e)}>
            <FormControl isRequired style={{ margin: "10px 0px" }}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <InputGroup>
                <InputLeftElement children={<EmailIcon />} />
                <Input id="email" type="email" />
              </InputGroup>
            </FormControl>
            <FormControl isRequired style={{ margin: "10px 0px" }}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup size="md" style={{ margin: "10px 0px" }}>
                <Input
                  id="password"
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputLeftElement children={<LockIcon />} />
                <InputRightElement
                  width="4.5rem"
                  // children={show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                >
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                    bgColor="transparent"
                  >
                    {/* {show ? "Hide" : "Show"} */}
                    {show ? (
                      <AiOutlineEye size={14} />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Flex justify={"space-between"} mt={3} mb={3} align={"center"}>
              <VStack align={"start"}>
                <Link color={"blue"}>Forgot Password?</Link>
                <Link
                  color="blue"
                  onClick={() => {
                    history.push("/signup");
                  }}
                >
                  Or Register
                </Link>
              </VStack>
              <Box>
                <Button
                  type="submit"
                  variant="solid"
                  bg={"blue"}
                  color={"white"}
                  _hover={{
                    bgColor: "pink.400",
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Flex>
          </form>
        </Box>
      </Box>
      {/* </FormControl> */}
    </Box>
  );
}

export default Login;
