import React from "react";
import styled from "styled-components";
import SearchBar from "../searchBar/SearchBar";

const Container = styled.div`
height: 70px;
background-color:white;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
width:100%;
//  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline #CAEBF2;
  padding-right: 50px;
`;

const Menu = styled.ul`
margin-left: 50px;
  display: flex;
  list-style: none;
  @media only screen and (max-width: 780px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  // color: #A9A9A9;
  color: #535353;
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: #FF3B3F;
  color: white;
  // color: #EFEFEF;
  font-weight: bold;
  // border-radius: 10px;
  cursor: pointer;
`;

const NewNavbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>UDEMY</Logo>
          <SearchBar/>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Courses</MenuItem>
            <MenuItem>Contact</MenuItem>
            {/* <MenuItem>Contact</MenuItem> */}
          </Menu>
        </Left>
        <Button>Get Started</Button>
      </Wrapper>
    </Container>
  );
};

export default NewNavbar;