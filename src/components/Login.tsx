'use client'


import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import {  Button, Card, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom";


const login = () => {
    
  return (
    <VStack
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      
    >
      <Card width={"500px"} padding={"0"} backgroundColor={"white"} color={"black"}  position={"absolute"}  borderRadius={"10%"}>
    
              <Heading color="teal.400" alignSelf={"center"} >Welcome</Heading>
        <FormControl width={"50%"} alignSelf={"center"}>
          <FormLabel fontSize={"1.5rem"} color=" #dd7973">Email address</FormLabel>
          <InputGroup>
          <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.300" position={"relative"} top={"9"} left={"10"} />} />
          <Input type="email" width={"100%"} h={"2rem"} placeholder='Enter Mail id' border={"1px solid black"}  _placeholder={{padding:"30px",color:"#dd7973"}}  borderRadius={"20px"} marginBottom={"1rem"} />
          </InputGroup>

          <FormLabel color=" #dd7973" fontSize={"1.5rem"}>Password</FormLabel>
          <InputGroup  position={"relative"}>
          <InputLeftElement  pointerEvents="none"  color="gray.300" children={<LockIcon color="gray" position={"relative"} top={"9"} left={"10"} />} />
          <Input type="password" width={"100%"} h={"2rem"} placeholder='Enter Password' _placeholder={{padding:"30px",color:" #dd7973"}} border={"1px solid black"} borderRadius={"20px"} marginBottom={"1rem"} />
          <InputRightElement >
          <Button h="1.75rem" size="sm" borderRadius={"15px"} top={"4"} right={"7"} cursor={"pointer"} _hover={{backgroundColor:"#55c2da",color:"white"}} border={"1px"}>show</Button>
          </InputRightElement>
          </InputGroup>
          <Stack alignItems={"center"}>
          <Link to="/ToughnessPage">
        <Button _hover={{backgroundColor:"#55c2da",borderColor:"yellow",fontSize:"20px",color:"white"}} h={"2rem"} alignSelf={"center"} borderRadius={"10px"} width={"100px"} height={"2.5rem"} fontSize={"1rem"} colorScheme='teal' cursor={"pointer"} border={"1px"}>
          Login
        </Button>
        </Link>
        <Stack>
        <Text >
        Don't have an account?
        <Link to="/signup" >
          <Button  h={"2rem"} w={"4rem"} borderRadius={"1rem"} margin={"1rem"} _hover={{backgroundColor:"#55c2da",fontSize:"1rem",color:"white"}} border={"1px"}>Signup</Button>
          </Link>
        </Text>
        </Stack>
        </Stack>
        </FormControl>
      </Card>
    </VStack>
  );
}

export default login