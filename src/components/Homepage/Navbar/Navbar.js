

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../../Redux/users/user.types";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch ()
  const {auth,token,loading,error} = useSelector((state)=>state.userReducer)
  const nav= useNavigate()
  return (
    <>
      <Box
        position={"fixed"}
        zIndex={1000}
        top={0}
        w={"100%"}
        boxShadow={
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
        }
        bg={"violet"}
        px={4} 
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box fontWeight={"bold"} color={"white"} cursor={'pointer'} onClick={() => { nav("/")}} >
            Notes Taking App
          </Box>

          <Flex alignItems={"center"}>
            <Stack alignItems={"center"} direction={"row"} spacing={7}>
              <Button bg={"blue"} display={auth==true?"block":"none"} m color={"black"} onClick={() => { nav("/notes")}}>
                All Notes
              </Button>
              <Button  display={auth==true?"none":"block"} bg={"blue"} m color={"black"} onClick={() => { nav("/register")}}>
                Sign Up
              </Button>
              <Button display={auth==true?"none":"block"} bg={"blue"} m color={"black"} onClick={() => { nav("/login")}}>
                Login
              </Button>
              <Button bg={"blue"} onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  border="2px solid white"
                  padding={2}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  
                  <MenuDivider />
                  
                  <MenuItem onClick={()=>{
                    dispatch({type:LOGOUT})
                  }}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
