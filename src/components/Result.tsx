import { Button, Card, Heading, Stack, Text, VStack } from "@chakra-ui/react"


const result = () => {

  return (
    <VStack height={"100dvh"} display={"flex"} justifyContent={"center"}>
      <Card display={"flex"} alignSelf={"center"} width={"500px"} minHeight={"20%"} padding={"20px"} backgroundColor={"white"} color={"black"}  position={"absolute"}  borderRadius={"10%"}>
          <Heading display={"flex"} justifyContent={"center"} >
            Your Result
          </Heading>
          <Stack>
          <Text className="active_question" fontSize={"2rem"} margin={"0"} display={"flex"} justifyContent={"center"}>
          /6
            </Text>
          </Stack>
          <Stack display={"flex"} alignItems={"center"} >
          <Button
            width={"50%"} 
            borderRadius={"10px"}
            height={"2.5rem"}
            borderWidth={"1px"}
            cursor={"pointer"}
            backgroundColor={"white"}
            >Retake</Button>
            </Stack>
      </Card>
    </VStack>
  )
}

export default result