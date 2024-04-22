import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import {  Button, Card, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, VStack } from "@chakra-ui/react"
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from '../services';
import { sendNotification } from '../utils/notification';
import { useNavigate } from "react-router-dom";


const login = () => {

  const [email_id,setEmail] = useState("");
  const [password,setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const history = useNavigate();


  const handleSubmit = async()=>{
    const payload = {
      email_id: email_id,
      password: password
    };
    const data:any = await loginUser(payload);
    if (data.length > 0) {
      sendNotification("success", "Successfully Logged in!");
      history("/toughnesspage");

    } else {
      sendNotification("error", "Invalid Username or password");
    }
  }

      const handlePass =()=>{
        setShowPassword(!showPassword)
    }
    const handleEmail =(e:any)=>{
      setEmail(e.target.value)
      console.log("==>",email_id)
    }
  return (
    <VStack
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Card width={"500px"} padding={"0"} backgroundColor={"white"} color={"black"}  position={"absolute"}  borderRadius={"10%"}>
    
              <Heading color="teal" alignSelf={"center"} >Welcome</Heading>
        <FormControl width={"50%"} alignSelf={"center"}>
          <FormLabel fontSize={"1.5rem"} paddingBottom={"10px"} color=" teal">Email address</FormLabel>
          <InputGroup>
          <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray" position={"relative"} top={"9"} left={"10"} />} />
          <Input type="email" width={"100%"} h={"2rem"} paddingLeft={"40px"} placeholder='Enter Mail id' border={"1px solid black"}  _placeholder={{padding:"30px",color:"grey"}}  borderRadius={"20px"} marginBottom={"1rem"} onChange={handleEmail} />
          </InputGroup>

          <FormLabel color=" teal" fontSize={"1.5rem"} paddingBottom={"10px"}>Password</FormLabel>
          <InputGroup  position={"relative"}>
          <InputLeftElement  pointerEvents="none"  color="gray.300" children={<LockIcon color="gray" position={"relative"} top={"9"} left={"10"} />} />
          <Input  width={"100%"} h={"2rem"} paddingLeft={"40px"} placeholder='Enter Password' _placeholder={{padding:"30px",color:" grey"}} border={"1px solid black"} borderRadius={"20px"} marginBottom={"1rem"} type={showPassword ? "text" : "password"} onChange={(e)=>{setPassword(e.target.value)}}  />
          <InputRightElement >
          <Button h="1.75rem" size="sm" borderRadius={"15px"} top={"4"} right={"7"} cursor={"pointer"} _hover={{backgroundColor:"#55c2da",color:"white"}} border={"1px"} onClick={handlePass}> {showPassword ? "Hide" : "Show"}</Button>
          </InputRightElement>
          </InputGroup>
          <Stack alignItems={"center"}>
        <Button _hover={{backgroundColor:"teal",borderColor:"yellow",fontSize:"20px",color:"white"}} h={"2rem"} alignSelf={"center"} borderRadius={"10px"} width={"100px"} height={"2.5rem"} fontSize={"1rem"} colorScheme='teal' cursor={"pointer"} border={"1px"}   onClick={handleSubmit}>
          Login
        </Button>
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