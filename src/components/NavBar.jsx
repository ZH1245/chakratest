import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  Link,
  Menu,
  MenuItem,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";
import { AiOutlineMenuUnfold, AiOutlineShoppingCart } from "react-icons/ai";
const links = [
  {
    label: "Home",
    addr: "/",
  },
  {
    label: "Products",
    addr: "/products",
  },
  {
    label: "About",
    addr: "/about",
  },
];
function NavBar() {
  const history = useHistory();
  const [ismenuOpen, setMenuOpen] = React.useState(false);
  const [drawer, setOpenDrawer] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const openDrawer = () => {
    setOpenDrawer(!drawer);
  };
  const GetRenderedLinks = (item) => {
    return (
      <Link
        px={2}
        py={1}
        rounded={"md"}
        color="white"
        fontWeight={600}
        _hover={{
          transition: "ease 0.4s",
          textDecoration: "none",
          bg: useColorModeValue("blue.300", "gray.700"),

          color: "black",
        }}
        onClick={() => history.push(`${item.addr}`)}
      >
        {item.label}
      </Link>
    );
  };
  return (
    <Box
      bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
      p={4}
    >
      <Flex justify={"space-between"} align="center">
        <Box display={{ sm: "none", md: "flex" }}>
          {links.map((item) => {
            return GetRenderedLinks(item);
          })}
        </Box>
        <Box display={{ sm: "flex", md: "none" }}>
          <IconButton
            onClick={() => {
              setMenuOpen(!ismenuOpen);
            }}
            icon={
              ismenuOpen ? (
                <CloseButton w={4} h={4} color="white" />
              ) : (
                <HamburgerIcon w={4} h={6} color="white" />
              )
            }
            bg="transparent"
            // outlineColor={"transparent"}
            // bgColor={"orange.400"}
            _hover={{
              transition: "all 1ms ease",
              bgColor: "blue.300",
            }}
          />
        </Box>
        <Box
          display={{ sm: "flex", md: "none" }}
          fontWeight={700}
          color="white"
        >
          LOGO
        </Box>
        <Box display={{ md: "none", sm: "flex" }}>
          <IconButton
            icon={<AiOutlineMenuUnfold w={4} h={6} color="white" />}
            bg="transparent"
            // outlineColor={"transparent"}
            // bgColor={"orange.400"}
            _hover={{
              transition: "all 1ms ease",
              bgColor: "blue.300",
            }}
            ref={btnRef}
            onClick={onOpen}
          />
        </Box>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="xs"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Account Options</DrawerHeader>

            <DrawerBody>
              <Stack>
                <Button
                  onClick={() => {
                    history.push("/login");
                  }}
                  // mr={2}
                  variant="solid"
                  bgColor="blue"
                  color="white"
                  _hover={{
                    textDecoration: "none",
                    bg: "blue.500",
                  }}
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    history.push("/signup");
                  }}
                  variant={"solid"}
                  borderColor="blue"
                  color={"white"}
                  bgColor="blue.600"
                  _hover={{
                    transitionDelay: "0.1s",
                    bg: "pink.800",
                  }}
                >
                  Signup
                </Button>

                <Button
                  onClick={() => {
                    history.push("/cart");
                  }}
                  variant={"solid"}
                  borderColor="blue"
                  color={"white"}
                  bgColor="blue.600"
                  _hover={{
                    transitionDelay: "0.1s",
                    bg: "pink.800",
                  }}
                  leftIcon={<AiOutlineShoppingCart />}
                >
                  Cart
                </Button>
              </Stack>
            </DrawerBody>

            {/* <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
        <Flex display={{ md: "flex", sm: "none" }}>
          <Button
            onClick={() => {
              history.push("/login");
            }}
            mr={2}
            variant="solid"
            bgColor="transparent"
            rounded={"base"}
            color="white"
            _hover={{
              textDecoration: "none",
              bg: "blue.500",
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              history.push("/signup");
            }}
            mr={2}
            variant={"solid"}
            borderColor="blue"
            color={"white"}
            bgColor="blue.600"
            _hover={{
              transitionDelay: "0.1s",
              bg: "pink.800",
            }}
          >
            Signup
          </Button>
          <Button
            onClick={() => {
              history.push("/cart");
            }}
            variant={"solid"}
            borderColor="blue"
            color={"white"}
            bgColor="transparent"
            leftIcon={<AiOutlineShoppingCart />}
            _hover={{
              transitionDelay: "0.1s",
              bg: "blue.500",
            }}
          >
            Cart
          </Button>
        </Flex>
        {/* <Flex
          display={{ md: "none", sm: "flex" }}
          
        ></Flex> */}
      </Flex>

      {/* <Menu> */}

      {ismenuOpen && (
        <Box display={{ md: "none" }} p={[3, 3]}>
          <Stack>
            {links.map((link) => {
              return GetRenderedLinks(link);
            })}
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default NavBar;
