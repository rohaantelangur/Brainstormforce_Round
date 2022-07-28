import React, { useEffect, useState } from "react";
import {
  Button,
  GridItem,
  Grid,
  Heading,
  Box,
  IconButton,
  Img,
  HStack,
  Stack,
  InputGroup,
  Input,
  Tag,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { FiPlay } from "react-icons/fi";
import { TbMessageCircle2 } from "react-icons/tb";
import { BsCodeSlash, BsSearch } from "react-icons/bs";
import { MdOutlineCancelPresentation } from "react-icons/md";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

const Home = () => {
  const [Show, setShow] = useState(false);
  const ScreenUrl = [
    "https://assets.v7-io.invisionapp.com/assets/A_MGFjZjlkZDY2YjhlM2JmOcaKZGuMwRUCuHrNlWjdoX2Ogg7Az15VDkGbGnaXl4O1GrDl2Wt3JjMSQoYTjOK7QJh9wOPFsXZWiVISApdYb_MAB_7qc8TJHT8ZuPntvUrm",
    "https://assets.v7-io.invisionapp.com/assets/A_MGFjZjlkZDY2YjhlM2JmOVaQjUu4oSUJxtHQmAfdU8LT4hwT1lUC6R4-1qyJ6TblncXrq1x9C14Dc9-UQFco914GOOZgqRRH7emw0HVNqQF8tr64s_Kz4b6_BRIcLdML",
    "https://picsum.photos/1250/300",
    "https://picsum.photos/1200/300",
    "https://picsum.photos/1350/800",
  ];
  const [Screens, setScreens] = useState(0);
  const [Draw, setDraw] = useState("");
  const [Notification, setNotification] = useState(false);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "-75px" });

  const HandleScreen = (x) => {
    if (Screens === ScreenUrl.length - 1 && x === 1) {
      setScreens(0);
    } else if (Screens === 0 && x === -1) {
      setScreens(ScreenUrl.length - 1);
    } else {
      setScreens(Screens + x);
    }
  };

  useEffect(() => {
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 400);
  }, [Screens]);

  return (
    <Box height={"100vh"} bg="#000" color="white">
      <Box position={"relative"} width={"full"} overflow={"hidden"}>
        {/* Left Icon */}
        <IconButton
          className="leftarrow"
          aria-label="left-arrow"
          colorScheme={"blackAlpha"}
          borderRadius="full"
          color={"black"}
          py={"40px"}
          pl={"50px"}
          pr={"20px"}
          fontSize={"30px"}
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => HandleScreen(-1)}
          _hover={{ left: -50 }}
        >
          <AiOutlineLeft />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          className="rightarrow"
          aria-label="right-arrow"
          colorScheme={"blackAlpha"}
          borderRadius="full"
          color={"black"}
          py={"40px"}
          pl={"20px"}
          pr={"50px"}
          fontSize={"30px"}
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => HandleScreen(1)}
          _hover={{ right: -50 }}
        >
          <AiOutlineRight />
        </IconButton>

        {/* Center Notification */}
        <IconButton
          className="leftarrow"
          aria-label="left-arrow"
          colorScheme={"blackAlpha"}
          borderRadius="full"
          color={"black"}
          p={"40px"}
          fontSize={"30px"}
          position="absolute"
          left={600}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          hidden={!Notification}
        >
          <Heading>
            {Screens + 1} Of {ScreenUrl.length}
          </Heading>
        </IconButton>
        {/* Slider */}
        <Box
          className={
            Draw === ""
              ? Show
                ? "screen1"
                : "screen2"
              : Draw === "DrwHarf"
              ? "screen3"
              : "screen4"
          }
          overflowY="scroll"
        >
          <Img
            className="Iframe"
            height={"100vh"}
            src={ScreenUrl[Screens]}
            title={"Screen " + (+Screens+1)}
          />
        </Box>
      </Box>

      <Box
        className={Draw === "DrwHarf" ? "DrwHarf" : "DrwFull"}
        hidden={Draw === "" ? true : false}
      >
        <Box bg="#000" alignItems="center">
          <HStack justifyContent="space-between">
            <Heading size="md" mx="10px">
              {ScreenUrl?.length} Screens
            </Heading>
            <HStack >
              <InputGroup size="sm" w="80%">
                <InputLeftAddon color="white">
                  <BsSearch />
                </InputLeftAddon>
                <Input placeholder="Search" />
              </InputGroup>

              <Button
                m={"-10px"}
                size={"sm"}
                borderRadius={0}
                variant="outline"
                onClick={() => {
                  Draw === "DrwHarf" ? setDraw("DrwFull") : setDraw("DrwHarf");
                }}
              >
                {Draw === "DrwHarf" ? (
                  <AiOutlineArrowUp />
                ) : (
                  <AiOutlineArrowDown />
                )}
              </Button>
              <Button
                size={"sm"}
                borderRadius={0}
                variant="outline"
                onClick={() => setDraw("")}
              >
                <MdOutlineCancelPresentation />
              </Button>
            </HStack>
          </HStack>
          <hr />
          <Box width="95%" m="auto">
            <Grid templateColumns="repeat(6, 1fr)" gap={5} mt={3} mb={"80px"}>
              {ScreenUrl?.map((item, index) => (
                <GridItem
                  key={index}
                  h="30vh"
                  onClick={() => setScreens(index)}
                >
                  <Img
                    src={item}
                    height="80%"
                    width="100%"
                    className={
                      Screens === index ? "ActiveScreen" : "InactiveScreen"
                    }
                    title="Iframe Example"
                  />
                  <Heading textAlign={"center"} size={"md"}>
                    Desktop - Screen {index + 1}
                  </Heading>
                </GridItem>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>

      <Box
        height={Show ? "10vh" : "0vh"}
        className={Show ? "StckyFoot" : "StckyFootHied"}
        // border="1px soild red"
        w="100%"
        bg="blue.400"
      >
        <Box height={"0px"}>
          <Button
            size="sm"
            colorScheme={"blackAlpha"}
            hidden={
              (Draw === "DrwHarf" && Show) || (Draw === "DrwFull" && Show)
            }
            onClick={() => setShow(!Show)}
            zIndex={"-1"}
            mt={"-60px"}
          >
            {Show ? "Hide" : "Show"}
          </Button>
        </Box>
        <Box alignContent={"center"} h={"10vh"} bg="#000">
          <HStack>
            <HStack w={"40%"}>
              <Img src="logo192.png" h={"7vh"} my="1.5vh" mx="25px" w="70px" />
              <Stack spacing={"0.5vh"} color="white">
                <Heading
                  fontSize="xl"
                  cursor="pointer"
                  onClick={() => {
                    Draw === "DrwHarf" ? setDraw("") : setDraw("DrwHarf");
                  }}
                >
                  Desktop - Create Account..{" "}
                  <Tag size={"sm"} mt="5px">
                    {Draw === "" ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                  </Tag>
                </Heading>
                <Heading fontSize="md">
                  {Screens + 1} Of {ScreenUrl.length}
                </Heading>
              </Stack>
            </HStack>

            <HStack w={"60%"} gap="30px" m="auto">
              <Button variant="ghost" size={"xl"}>
                <FiPlay fontSize={"40px"} />
              </Button>
              <Button variant="ghost" size={"xl"}>
                <TbMessageCircle2 fontSize={"40px"} />
              </Button>
              <Button variant="ghost" size={"xl"}>
                <BsCodeSlash fontSize={"40px"} />
              </Button>
            </HStack>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
