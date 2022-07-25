import React from 'react'
import styled from "styled-components";
import SearchBar from '../searchBar/SearchBar';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const MainNavbar = () => {

    const Container = styled.div`
 height: 70px;
background-color:white;
display: flex;
justify-content: space-between;
align-items: center;
// position: fixed;
position: sticky;
z-index: 1500;
top: 0;
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
// background-color: #A9A9A9;
width: 50%;
max-width: 1000px;
// flex:1.5;
display: flex;
align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline #CAEBF2;
  padding-right: 50px;
  margin: 0px;
`;


const Right = styled.div`
  //  background-color: #FF3B3F;
   width: 50%;
   max-width: 1000px;
  // flex:2;
  padding-left:0px;
  margin-left:0px;
  
  
`;

const Menu = styled.ul`
// background-color: #CAEBF2;
// border: 2px solid #CAEBF2;
margin-left: 50px;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-between;

  margin: 0;
  padding: 0;

  @media only screen and (max-width: 780px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 18px;
  font-weight: bold;
  // color: #A9A9A9;
  color: #535353;
  cursor: pointer;

  

  @media only screen and (max-width: 980px) {
    // display: none;
    display: ${props => props.primary && "none"};
  }
`;

const VerticalLine = styled.div`
border-left: 2px solid #A9A9A9;
border-radius:50px;
height: 25px;
`;


const Button = styled.button`
  border: 2px solid #FF3B3F;
  // margin: 0px;
  padding: 10px 15px;
   background-color: transparent;
  color: #FF3B3F;
  // color: #EFEFEF;
  font-weight: bold;
  // border-radius: 10px;
  cursor: pointer;
`;


const MenuLeft = styled.div`
  // flex:2;
  display: flex;
  justify-content: space-between;
  align-items: center;
   height: 100%;
  
`;

const MenuRight = styled.div`
//  flex:1;
 display: flex;
 align-items: center;
 justify-content: flex-end;
`;



  return (
    <Container>
      <Wrapper>

        <Left>
        <Logo>UDEMY</Logo>
            <SearchBar/>
        </Left>
            
        

        <Right>
        <Menu>
            <MenuLeft>
                <MenuItem primary>Categories</MenuItem>
                <MenuItem>Teach On Udemy</MenuItem>
                <ShoppingCart className='icon'/>
                {/* <VerticalLine/> */}
            </MenuLeft>
            <VerticalLine/>
            <MenuRight>
                <PersonIcon className='icon' style={{color: "#FF3B3F"}}/>
                <MenuItem>Login</MenuItem>
                <Button>Get Started</Button>
            </MenuRight>
            
            
            {/* <MenuItem>Contact</MenuItem> */}
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default MainNavbar