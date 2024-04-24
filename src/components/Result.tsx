import { Button, Card, Heading, Stack, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import './Quiz.css';


const Result = ({count}:{count?:any}) => {
  
  return (
    <VStack height={"100dvh"} display={"flex"} justifyContent={"center"} fontFamily={"monospace"}>
      <Card display={"flex"} alignSelf={"center"} width={"500px"} minHeight={"20%"} padding={"20px"} backgroundColor={"white"} color={"black"}  position={"absolute"}  borderRadius={"4px"}>
          <Heading display={"flex"} justifyContent={"center"} >
            Result
          </Heading>
          <Stack >
            <Text display={"flex"} justifyContent={"center"} fontSize={"16px"}>
              Total Questions: 60
            </Text>
            <Text display={"flex"} justifyContent={"center"} fontSize={"16px"} >
            Total Score: {count*10}
            </Text>
            <Text display={"flex"} justifyContent={"center"} fontSize={"16px"}>
            Correct Answers:{count}
            </Text>
            <Text display={"flex"} justifyContent={"center"} fontSize={"16px"}>
            Wrong Answers: {6-count}
            </Text>
          {/* <Text className="active_question" fontSize={"2rem"} margin={"0"} display={"flex"} justifyContent={"center"}>
          /6
            </Text> */}
          </Stack>
          <Stack display={"flex"} alignItems={"center"} >
          
          <Link to="/toughnesspage">
            <Button
            width={"100%"} 
            borderRadius={"9px"}
            fontSize={"18px"}
            color={"#fff"}
            padding={"10px 42px"}
            outline={"none"}
            border={"none"}
            marginTop={"15px"}
            cursor={"pointer"}
            id={"result_button"}
            >
            Try Again
            </Button>
            </Link>
            </Stack>
      </Card>
    </VStack>
  )
}

export default Result