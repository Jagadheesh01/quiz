'use client'

import { Button, HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom";

const Toughnesspage = () => {
  return (
    <HStack
      display={"flex"}
      flexDirection={"row"}
      height={"100vh"}
      justifyContent={"center"}
    >
      <Link to="/QuizPage">
        <Button
        _hover={{backgroundColor:"#55c2da",color:"white",fontSize:"3rem",borderRadius:"20px", border:"2px solid white"}}
          padding={"2rem"}
          margin={"2rem"}
          background={"lightpink"}
          border={"2px solid violet"}
          borderRadius={"10px"}
          fontSize={"1.5rem"}
          width={"10rem"}
          height={"3rem"}
          cursor={"pointer"}
        >
          Easy
        </Button>
      </Link>
      <Link to="/QuizPage">
        <Button
        _hover={{backgroundColor:"Green",color:"white",fontSize:"2rem",borderRadius:"20px", border:"2px solid white"}}
          padding={"2rem"}
          margin={"2rem"}
          background={"lightpink"}
          border={"2px solid violet"}
          borderRadius={"10px"}
          fontSize={"1.5rem"}
          width={"10rem"}
          height={"3rem"}
          cursor={"pointer"}
        >
          Moderate
        </Button>
      </Link>
      <Link to="/QuizPage">
        <Button
        _hover={{backgroundColor:"red", color:"white",fontSize:"3rem",borderRadius:"20px", border:"2px solid white"}}
          padding={"2rem"}
          margin={"2rem"}
          background={"lightpink"}
          border={"2px solid violet"}
          borderRadius={"10px"}
          fontSize={"1.5rem"}
          width={"10rem"}
          height={"3rem"}
          cursor={"pointer"}
        >
          Hard
        </Button>
      </Link>
    </HStack>
  );
};

export default Toughnesspage