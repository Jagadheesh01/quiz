'use client'
import { Button, Card, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react';
import './Quiz.css';

const QuizPage = () => {
  return (
    <VStack height={"100vh"} justifyContent={"center"}>
      <Card alignItems={"center"} width={"50%"}>
        <Stack className="timer-container" height={"5px"} width={"65%"}>
          <Stack className="timer"></Stack>
        </Stack>

        <Stack
          width={"50%"}
          backgroundColor={"white"}
          padding={"55px"}
          borderRadius={"5px"}
        >
          <Stack
            display={"flex"}
            flexDirection={"row"}
            alignItems={"baseline"}
            gap={"0"}
          >
            <Text className="active_question" fontSize={"2rem"} margin={"0"}>
              1
            </Text>
            <Text className="total_question" fontSize={"1rem"} margin={"0"}>
              /6
            </Text>
          </Stack>
          <Heading as="h2" size="xl">
            ______ provide a way to pass data from one component to another.
            Fill in the blank.
          </Heading>
          <Input borderRadius={"10px"} height={"2rem"} borderWidth={"1px"} />
          <Stack alignSelf={"end"} width={"100px"}>
            <Button
              borderRadius={"10px"}
              height={"2.5rem"}
              borderWidth={"1px"}
              cursor={"pointer"}
              backgroundColor={"white"}
            >
              NEXT
            </Button>
          </Stack>
        </Stack>
      </Card>
    </VStack>
  );
}

export default QuizPage