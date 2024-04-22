import { Button, Card, FormControl, FormLabel, Heading, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { signUpUser } from '../services';
import { useState } from "react";
import { sendNotification } from "../utils/notification";



const SignUp = () => {

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");

  const handleSubmit =async()=>{
    const payload = {
      first_name:firstName,
      last_name:lastName,
      email_id:email,
      password:pass
    }
    const data:any = await signUpUser (payload);

    if(data.length > 0){
      sendNotification("success", "Successfully Registered!");
    } else {
      sendNotification("error", "Something went wrong!");
    }
  }

  return (

<VStack height={"100vh"} alignItems={"center"} justifyContent={"center"}>
<Card width={"500px"} padding={"0"} backgroundColor={"white"} color={"black"}    borderRadius={"10%"}>
<Heading color="teal" alignSelf={"center"}>Signup</Heading>    
    <FormControl width={"50%"} alignSelf={"center"}>
          <FormLabel color=" teal" id='first_name' fontSize={"1.5rem"}>First Name</FormLabel>
          <Input onChange={(e)=>{setFirstName(e.target.value)}} paddingLeft={"20px"} borderColor={"#be794b"} borderWidth={"1px"} required placeholder='Enter First Name' _placeholder={{padding:"20px",color:"grey"}} width={"100%"} h={"2rem"} borderRadius={"20px"} marginBottom={"1rem"} />
          <FormLabel color=" teal" fontSize={"1.5rem"}>Last Name</FormLabel>
          <Input onChange={(e)=>{setLastName(e.target.value)}} paddingLeft={"20px"}  borderColor={"#be794b"} borderWidth={"1px"} placeholder='Enter Last Name'  _placeholder={{padding:"20px",color:"grey"}} width={"100%"} h={"2rem"} borderRadius={"20px"} marginBottom={"1rem"} />
          <FormLabel color=" teal" fontSize={"1.5rem"}>Email address</FormLabel>
          <Input onChange={(e)=>setEmail(e.target.value)} paddingLeft={"20px"}  borderColor={"#be794b"} borderWidth={"1px"} placeholder='Enter valid Mail id' _placeholder={{padding:"20px",color:"grey"}} width={"100%"} h={"2rem"} borderRadius={"20px"} marginBottom={"1rem"}  />
          <FormLabel color=" teal" fontSize={"1.5rem"} >Password</FormLabel>
          <Input onChange={(e)=>setPass(e.target.value)} paddingLeft={"20px"}  borderColor={"#be794b"} borderWidth={"1px"} placeholder='Enter your password' _placeholder={{padding:"20px",color:"grey"}} width={"100%"} h={"2rem"} borderRadius={"20px"} marginBottom={"1rem"} />
          <Stack alignItems={"center"}>
          <Button _hover={{backgroundColor:"teal",fontSize:"20px",color:"white"}} h={"2rem"} borderWidth={"1px"} borderRadius={"10px"} width={"100px"} height={"2.5rem"} fontSize={"1rem"}  cursor={"pointer"} border={"1px"} onClick={handleSubmit} >Signup</Button>

        <Text >
        Already have an account? &nbsp;
        <Link to="/">
          Login
          </Link>
        </Text>
        </Stack>
        </FormControl>
      </Card>
</VStack>
  );
}

export default SignUp