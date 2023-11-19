
import {
    Flex,
    Box,
    FormControl,
    Image, VStack,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'
import loginpic from "../assets/login.jpg";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Redux/users/user.actions';
import { useNavigate } from 'react-router-dom';


export default function LoginPage(){
  const nav= useNavigate()  
  const {auth,token,loading,error} = useSelector((state)=>state.userReducer)
  console.log(auth,token);
  if(auth){
    nav("/notes")
  }
    const [email,setEmail]=useState("");
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()

    const handleLogin = ()=>{
      dispatch(getUser({email,password}))
        
    }
    
     return <Flex padding={4} w="100%">
        <Image
        w={"50%"} src={loginpic}
        alt="loginpage Image"
      />
        <VStack w={"50%"}>
        <Flex
      minH={'100vh'} mt={"4"}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
                onClick={handleLogin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

        </VStack>
       
    </Flex>
}