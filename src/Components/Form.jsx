import {
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  extendTheme,
  Box,
  HStack,
  Select,
  Button,
  Heading,
  Stack,
  Link,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});

export default function Test() {
  const [showPassword, setShowPassword] = useState(false);
  const [CheckSubmit, setCheckSubmit] = useState(false);
  const [FormData, setFormData] = useState({
    Name: "",
    Email: "",
    Selected: "",
    Password: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setCheckSubmit(true);
    console.log(FormData);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box p={8} bg="white" color="black">
        <HStack w="80%" m="auto" spacing={0}>
          <Box h="550px" w="40%" m={"auto"}>
            <Heading size={"lg"}>Let's set up your account</Heading>
            <Stack py={3}>
              <Text>
                Already have an account? <Link color={"blue.400"}>Sign in</Link>
              </Text>
            </Stack>
            <FormControl
              mb={8}
              variant="floating"
              id="first-name"
              isRequired
              isInvalid={FormData.Name === "" && CheckSubmit}
            >
              <Input placeholder=" " name="Name" onChange={HandleChange} />
              <FormLabel>First name</FormLabel>
            </FormControl>

            <FormControl
              variant="floating"
              id="email-address"
              isRequired
              mb={7}
              isInvalid={
                (FormData.Email !== "" && !FormData.Email.includes("@")) ||
                CheckSubmit
              }
            >
              <Input placeholder=" " name="Email" onChange={HandleChange} />
              <FormLabel>Email address</FormLabel>
              <FormErrorMessage mb={-7}>
                Please enter a valid email address
              </FormErrorMessage>
            </FormControl>

            <FormControl variant="floating" id="Select" isRequired>
              <Select
                mb={7}
                placeholder="I would describe my user type as"
                name="Selected"
                onChange={HandleChange}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>

            <FormControl variant="floating" id="password" isRequired>
              <InputGroup>
                <FormLabel>Password</FormLabel>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="Password"
                  onChange={HandleChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormHelperText>Minimum 8 character</FormHelperText>
            </FormControl>

            <Button w="100%" mt={5} type="Submit" onClick={HandleSubmit}>
              Next
            </Button>

            <Stack pt={3}>
              <Text fontSize={"xs"}>
                By clicking the "Next" button, you agree to creating a free
                account, and to <Link color={"blue.400"}>Terms of Service</Link>{" "}
                and <Link color={"blue.400"}>Privacy Policy.</Link>
              </Text>
            </Stack>
          </Box>
          <Box w="50%" color={"white"}>
            <Box
              border="1px solid"
              px={"35px"}
              h={"550px"}
              bg={"blue.400"}
            >
              <Heading mt="40%" textAlign={"center"} size={"lg"}>
                Dummy Heading
              </Heading>
              <Text mt="5%">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nesciunt et labore alias ex aliquam, quasi officiis tempora cum
                asperiores dolore, quam repellat eveniet, nemo consequatur?
                Minima necessitatibus a neque?
              </Text>
            </Box>
          </Box>
        </HStack>
      </Box>
    </ChakraProvider>
  );
}
