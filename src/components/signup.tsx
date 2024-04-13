'use client'

import { Button, Card, FormControl, FormLabel, Heading, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const signup = () => {
  return (
<VStack height={"100vh"} alignItems={"center"} justifyContent={"center"}>
<Card width={"500px"} padding={"0"} backgroundColor={"white"} color={"black"}    borderRadius={"10%"}>
<Heading color="teal.400" alignSelf={"center"}>Signup</Heading>    
    <FormControl width={"50%"} alignSelf={"center"}>
          <FormLabel color=" #dd7973" id='first_name' fontSize={"1.5rem"}>First Name</FormLabel>
          <Input borderColor={"#be794b"} borderWidth={"1px"} required placeholder='Enter First Name' _placeholder={{padding:"20px",color:"#ffbd03"}} width={"100%"} h={"2rem"} borderRadius={"20px"} marginBottom={"1rem"} />
          <FormLabel color=" #dd7973" fontSize={"1.5rem"}>Last Name</FormLabel>
          <Input borderColor={"#be794b"} borderWidth={"1px"} placeholder='Enter Last Name'  _placeholder={{padding:"20px",color:"#ffbd03"}} width={"100%"} h={"2rem"} borderRadius={"20px"} marginBottom={"1rem"} />
          <FormLabel color=" #dd7973" fontSize={"1.5rem"}>Email address</FormLabel>
          <Input borderColor={"#be794b"} borderWidth={"1px"} placeholder='Enter valid Mail id' _placeholder={{padding:"20px",color:"#ffbd03"}} width={"100%"} h={"2rem"} borderRadius={"20px"} marginBottom={"1rem"}  />
          <FormLabel color=" #dd7973" fontSize={"1.5rem"} >Password</FormLabel>
          <Input borderColor={"#be794b"} borderWidth={"1px"} placeholder='Enter your password' _placeholder={{padding:"20px",color:"#ffbd03"}} width={"100%"} h={"2rem"} borderRadius={"20px"} marginBottom={"1rem"} />
          <Stack alignItems={"center"}>
          <Button _hover={{backgroundColor:"#be68db",fontSize:"20px",color:"white"}} h={"2rem"} borderWidth={"1px"} borderRadius={"10px"} width={"100px"} height={"2.5rem"} fontSize={"1rem"}  cursor={"pointer"} border={"1px"} >Signup</Button>

        <Text >
        Already have an account? &nbsp;
        <Link to="/" >
          Login
          </Link>
        </Text>

        </Stack>
        </FormControl>
      </Card>
</VStack>
  );
}

export default signup