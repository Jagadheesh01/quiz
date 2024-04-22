import  { useEffect, useState } from 'react';
import { Button, Card, Heading, Stack, Text, UnorderedList, VStack } from '@chakra-ui/react';
import './Quiz.css';
import { easyQuestions } from '../services';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import  Result from './Result';

interface QuizData {
  questions: string[];
  options: string[][];
}

const QuizPage = () => {
  const [count, setCount] = useState(1);
  const [quizData, setQuizData] = useState<null | any[]>(null);
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState<[]>([]);
  const [choices, setChoices] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showTimer,setShowtimer] = useState(false)
  const history = useNavigate();
  const location = useLocation();

  const readData = async () => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('diff');
    const data: any = await easyQuestions(query);
    setQuizData(data);
    console.log("==>", data);

    if (data && data.length > 0) {
      const extractedQuestions = data.map((item: any) => item);
      console.log("===>", extractedQuestions);
      setQuestions(extractedQuestions);
      const extractedChoices = data.map((item: any) => item.choices);
      setChoices(extractedChoices);
      const correctOption = data.map((item:any)=> item.correct_option);
      console.log("correctOption",correctOption)
      const questionId = data.map((item:any)=>item.id)
      console.log("questionId",questionId)
    }
    return data;
  };
  useEffect(() => {
    readData();
  }, []);

  // const handleSubmit = () => {
  //   if (count < 6) {
  //     setCount(count + 1);
  //   }else{
  //     history("/Result");
  //   }
  // };
    useEffect(() => {
    const timer = setTimeout(() => {
      if (count < 7) {
        setCount(count + 1);
        setShowtimer(false)
      } else {
        // const data = answer?.filter((item:any)=>item?.score===true )
        // setCorrectAnswer(data)
        // console.log("data",data)
        // history("/result");
      }
    }, 10000); 


        if (count < 7) {
          const data = answer?.filter((item:any)=>item?.score===true )
          setCorrectAnswer(data)
          console.log("data",data)
        } else {
          console.log("error1234")
        }


    return () =>{
       clearTimeout(timer)
       setShowtimer(true)
    }
  }, [count, history]);

  const handleAnswerClick = (id: number, label: string) => {
    console.log('clicked',id);
 
    const selectedQuestion = questions?.[count - 1] as any
    const previousAnswers: any = [...answer];
    // previousAnswers.push({
    //   questionID: selectedQuestion.id,
    //   answerID: id,
    //   answerLabel:label,
    //   questionLabel:selectedQuestion.questions,
    // })
    previousAnswers[count - 1] = {
      questionID: selectedQuestion?.id,
      answerID: id,
      answerLabel:label,
      questionLabel:selectedQuestion.questions,
      correctOption : selectedQuestion.correct_option,
      score: +id === +selectedQuestion.correct_option ? true : false
    }
    setAnswer(previousAnswers)
    setSelectedOption(id);
 const result = answer.score
    console.log("first",result)

  };
 console.log("answer1",answer)
 console.log("=1=>",questions?.[count - 1])


const answerID = answer[count - 1]?.answerID;
console.log("====>123",answerID)
// const resultAnswerId = data.map((item:any)=>{item.answerID})
// const resultAnswer = data.map
// const calculateResult = () => {
//   let score = 0;
//   answer.forEach((ans, index) => {
//     if (ans && ans.answerLabel === correctOptions[index]) {
//       score++;
//     }
//   });
//   return score;
// };



  return (
    <>
   { count < 7 ? <VStack height={"100vh"} justifyContent={"center"}>
      <Card alignItems={"center"} width={"50%"}>
       {showTimer && <Stack className="timer-container" height={"5px"} width={"65%"}>
          <Stack className="timer"></Stack>
        </Stack>
        }
        <Stack
          width={"50%"}
          backgroundColor={"white"}
          padding={"55px"}
          borderRadius={"5px"}
          minHeight={"70%"}
        >
          <Stack
            display={"flex"}
            flexDirection={"row"}
            alignItems={"baseline"}
            gap={"0"}
          >
            <Text className="active_question" fontSize={"2rem"} margin={"0"}>
              {count}
            </Text>
            <Text className="total_question" fontSize={"1rem"} margin={"0"}>
              /6
            </Text>
          </Stack>
          <Heading as="h2" size="xl">
            {/* {questions.map((question, index) => (
              <div key={index}>
                {index + 1 === count && question}
              </div>
            ))} */}
            {questions?.[count - 1]?.questions}
          </Heading>
          <UnorderedList padding={"0"} marginTop={"10px"} cursor={"pointer"} listStyleType={"none"}>
          {choices[count - 1]?.map((choice: any, index: number) => (
              <Button
                key={index}
                height={"3rem"} 
                border={answerID!==choice.id ?  "1px solid teal" : "2px solid #d08642"}
                width={"100%"}
                cursor={"pointer"}
                onClick={()=>handleAnswerClick(choice.id , choice.label)}
                borderRadius={"16px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                marginBottom={"10px"}
                data-id={choice.id}
                >
                {choice.label}
              </Button>
            ))}
          </UnorderedList>
          {/* <Button
            borderRadius={"10px"}
            height={"2.5rem"}
            borderWidth={"1px"}
            cursor={"pointer"}
            backgroundColor={"white"}
            onClick={handleSubmit}
          >
            NEXT
          </Button> */}
        </Stack>
      </Card>
    </VStack> : <Result count={correctAnswer?.length || 0} />}
    </>
  );
};

export default QuizPage;
