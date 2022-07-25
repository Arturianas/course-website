import React from "react";
import styled from "styled-components";
// import Woman from '../img/woman.png'
import AnimatedShapes from "../animatedShapes/AnimatedShapes";

const Container = styled.div`
   height: calc(100vh - 70px);
//  height: 100vh;
    background-color: #EFEFEF;
  display: flex;
  // padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;
   color: #A9A9A9;
  // color: #535353;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 10px;
  color: #535353;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: #FF3B3F;
  // color: white;
  color: #EFEFEF;
  // border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
  padding-top: 200px;
  background-color: #CAEBF2;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
margin-top:100px;
    width: 300px;
    height: 300px;
    object-fit: cover;
  
`

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          {/* <Contact>
            <Phone>Call Us (012) 345 - 6789</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact> */}
        </Info>
      </Left>
      {/* <Right><Image src="https://pngimg.com/uploads/student/student_PNG124.png"/></Right> */}
      <Right></Right>
      {/* <AnimatedShapes/> */}
    </Container>
  );
};

export default Intro;