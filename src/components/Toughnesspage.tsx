import { Button, HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom";

const ToughnessPage = () => {
  return (
    
    <HStack
      display={"flex"}
      flexDirection={"row"}
      height={"100vh"}
      justifyContent={"center"}
    >
      <Link to={{pathname:'/quizpage',search:'diff=easy'}}>
        <Button
        _hover={{backgroundColor:"lightgreen",boxShadow: "0 1rem 1rem -0.4rem white",transform:"translateY(-0.25em)",color:"#313638",transition:"all 0.5s ease",fontSize:"2rem",borderRadius:"2px", border:"2px solid white"}}
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
      <Link to={{pathname:'/quizpage',search:'diff=moderate'}}>
        <Button
        _hover={{backgroundColor:"#B2FFFF",boxShadow: "0 1rem 1rem -0.4rem #B2FFFF",transform:"translateY(-0.25em)",color:"#313638",fontSize:"1.5rem",transition:"all 0.5s ease",borderRadius:"2px", border:"2px solid white"}}
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
      <Link to={{pathname:'/quizpage',search:'diff=hard'}}>
        <Button
        _hover={{backgroundColor:"#C60C30",boxShadow: "0 1rem 1rem -0.4rem #C60C30",transform:"translateY(-0.25em)", color:"#313638",fontSize:"2rem",transition:"all 0.5s ease",borderRadius:"2px", border:"2px solid white"}}
          padding={"2rem"}
          margin={"2rem"}
          background={"lightpink"}
          border={"2px solid violet"}
          borderRadius={"10px"}
          fontSize={"1.5rem"}
          width={"10rem"}
          height={"4rem"}
          cursor={"pointer"}
        >
          Hard
        </Button>
      </Link>
    </HStack>
  );
};

export default ToughnessPage