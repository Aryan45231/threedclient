import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import "./index.css"

const DailogBoxCard = styled.div`
  min-height: ${({ height }) => `${height}`};
  min-width:300px;
  width: ${({ width }) => `${width}`};
  display :flex;
  flex-direction:column;
  padding:5px;
  justify-content:${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  background-color:black;
  color:white;
  border-radius: 24px;

`;
const Row = styled.div`
    width:100%;
    margin:10px;
    height: ${({ height }) => `${height}px`}
    display:flex;
    justify-content:${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    margin:10px;
`;
const Container = styled.div`
    position: relative;
    display :${({ display }) => display};
    justify-content:${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    flex-direction:${({ flexDirection = "row" }) => flexDirection};
    height:${({ height }) => height};
    width:${({ width }) => width};
`;
const Buttons = styled.button`
     width:${({ width }) => width};
     cursor:pointer;
     font-size:20px;
      height: 35px;
      color : ${({color})=>color};
      bakground-color: ${({ backgroundColor }) => backgroundColor};
      padding: 5px;
      border: 1ps solid white;
      border-radius: 35px;
`;

const Input = styled.input` 
    margin-top : 30px;
    height:${({ height }) => `${height}`};
    width:${({ width }) => `${width}`};
    border-radius: ${({borderRadius})=> borderRadius };
    background-color:black;
    border:1px solid gray;
    &:focus{
      border:none;
       outline : 1px solid skyblue;
    }
`;
const WhiteButton = ({
  children,
  onClick,
  width
}) => {
  return (
      <Buttons onClick={onClick} color="black" backgroundColor="white" width={width}>
        {children}
      </Buttons> 
  );
}
const DailogBox = ({
  onClick,
  height,
  width,
  children,
  justifyContent,
  alignItems
}) => {
  const cancelstyle = { fontSize: "20px", cursor: "pointer", fontWeight: "800px" }
  return <DailogBoxCard height={height} justifyContent={justifyContent} alignItems={alignItems} width={width}>
    <Row justifyContent="flex-start" height="10" >
      <AiOutlineClose style={cancelstyle} onClick={onClick} />
    </Row>
    <Container
      width="100%"
      justifyContent="space-between"  height="100%" alignItems="center" display="flex">
      {children}
    </Container>
  </DailogBoxCard>
}

const NavContainer = styled.div`
  width:100%;
  height:50px;
  display:flex;
  border-bottom: 1px solid rgb(75, 62, 62);
  z-index:1;
  align-items:center;
`
const NavButton = styled.button`
    padding 10px ;
    flex:1;
    border:none;
    color:white;
    font-size:20px;;
    background-color: transparent;
    transition:  all .1s linear ;
    &:hover{
      background-color: rgba(162, 154, 154, 0.351);
    }
`;
const SideCard = styled.div`
    margin-top:20px;
    width:100%; 
    min-height:200px;
    color:white;  
    padding:10px ;
    border-radius:20px;
    background-color: rgb(56, 53, 53); ;
;`
const Header = ({
  heading,
  subHeading 
})=>{
   return (
      <div className="HeaderContainer">
         <div className="leftSideHeader">
         <button className="backButton">
          back
         </button>
         <div className="Headings">
         <h2>  {heading} </h2>
         <h4> {subHeading}</h4>
         </div>
         </div>
         <div className="rightSideHeader">
           <WhiteButton width="100px">
           follow
           </WhiteButton>
         </div>
      </div>
   );
}

export default {
  DailogBox,
  Row,
  Container,
  NavContainer,
  NavButton,
  WhiteButton,
  SideCard,
  Input,
  Header
}