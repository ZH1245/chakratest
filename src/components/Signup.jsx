import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import NavBar from "./NavBar";

function Signup() {
  const [showPassword, setshowPassword] = React.useState(false);
  const [usertype1, setUserType] = React.useState("user");
  const handleSubmit = (e) => {
    e.preventDefault();
    let { email, password, fname, lname } = e.target;
    console.log(
      email.value,
      password.value,
      fname.value,
      lname.value,
      usertype1
    );
  };

  return (
    <Box>
      <header>
        <NavBar />
      </header>
      <Box align="center">
        <Box maxW="md" justify="center">
          <Box m={4}>
            <Text fontSize="4xl" letterSpacing={5} fontFamily={"fantasy"}>
              Signup
            </Text>
            <Divider />
          </Box>
          <form onSubmit={(e) => handleSubmit(e)}>
            <FormControl isRequired style={{ margin: "10px 0px" }}>
              <FormLabel htmlFor="fname">First Name</FormLabel>
              <Input id="fname" type={"text"} placeholder="John" />
            </FormControl>
            <FormControl isRequired style={{ margin: "10px 0px" }}>
              <FormLabel htmlFor="lname">Last Name</FormLabel>
              <Input id="lname" type={"text"} placeholder="Doe" />
            </FormControl>
            <FormControl isRequired style={{ margin: "10px 0px" }}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <InputGroup>
                <InputLeftElement children={<EmailIcon />} />
                <Input
                  id="email"
                  type="email"
                  placeholder="johndoe@google.com"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired style={{ margin: "10px 0px" }}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup>
                <InputLeftElement children={<LockIcon />} />
                <InputRightElement>
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={() => {
                      setshowPassword(!showPassword);
                    }}
                    bg={"transparent"}
                  >
                    {showPassword ? (
                      <AiOutlineEye size={18} />
                    ) : (
                      <AiOutlineEyeInvisible size={18} />
                    )}
                  </Button>
                </InputRightElement>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired style={{ margin: "10px 0px" }}>
              <FormLabel htmlFor="usertype">User Type</FormLabel>
              <RadioGroup
                id="usertype"
                onChange={setUserType}
                value={usertype1}
              >
                <Stack direction={"row"}>
                  <Radio value="user">User</Radio>
                  <Radio value="seller">Seller</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <Button
              mt="2"
              mb="2"
              w="100%"
              type="submit"
              bg={"blue"}
              color="white"
              display={"flex"}
              _hover={{
                bg: "blue.400",
              }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Signup;
