
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
import signuppic from "../assets/signup.jpg";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Redux/users/user.actions';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../constants/config';


export default function SignupPage(){
const nav= useNavigate()  
const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword] = useState("")
  

  const handleSignup = async ()=>{
    let data = await axios.post(BASE_URL+"/user/register",{
      name,email,password
    })
    let {message,status} =data.data
    if(status===1){
      alert(message)
      nav("/login")
    }else{
      alert(message)
    }
      
  }
  
   return <Flex padding={4} w="100%">
      <Image
      w={"50%"} src={signuppic}
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
        <Heading fontSize={'4xl'}>Sign Up</Heading>
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
        <FormControl id="name">
            <FormLabel>Enter Name</FormLabel>
            <Input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          </FormControl>
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
              onClick={handleSignup}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Sign Up
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>

      </VStack>
     
  </Flex>
}