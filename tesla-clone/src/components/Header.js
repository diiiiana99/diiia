import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/Car/carSlice';
import { useSelector } from 'react-redux';
function Header() { 
    const [open,setOpen] = useState(false)
    const cars = useSelector(selectCars)

  
    return (
    <Container>
        <a>
            <img src ="/images/logo.svg" alt =""/>
        </a>
        <Menu>
            {/* {cars && cars.map ((car, index) => (
                <a key={index} href="#">{car}</a>
            ))} */}
                <p><a href="#">Model S</a></p>
                <p><a href="#">Model 3</a></p>
                <p><a href="#">Model X</a></p>
                <p><a href="#">Model Y</a></p>

        </Menu>
        <RightMenu> 
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <CustomMenu onClick={() => setOpen(true)} />

        </RightMenu>
        <Sidebar show={open}>
            <CloseWrapper>
                <CloseButton  onClick={() => setOpen(false)} />
            </CloseWrapper>
            {cars && cars.map ((car, index) => (
               <li key={index}><a key={index} href="#">{car}</a></li>
               
            ))}
         
            <li><a href="#">Existing Inverntory</a></li>
            <li><a href="#"></a>Used Inverntory </li>
            <li><a href="#"></a>Trade-In</li>
            <li><a href="#"></a>CyberTruck</li>
            <li><a href="#"></a>Roadaster</li>
            <li><a href="#"></a>Semi</li>
            <li><a href="#"></a>Charging</li>
        </Sidebar>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    padding:0 20px;
    top: 0;
    left: 0; 
    right: 0;
    justify-content:space-between;
    z-index: 1;

`

const Menu = styled.div `
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
     
    
    a {
        font-weight: 600; 
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
    }
    @media (max-width: 768px) {
        display:none;
}
`
const RightMenu= styled.div `
display:flex;
align-items: center;
a {
    font-weight: 600;
    text-transform:uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
}
`
const CustomMenu = styled(MenuIcon)`
    cursor:pointer;

`
const Sidebar = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background:white;
width: 300px;
z-index: 16;
list-style: none;
padding: 20px;
display:flex;
flex-direction: column;
text-align:start;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
transition: transform 0.4s ease-in;

li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
 
}

`
const CloseButton = styled(CloseIcon)`
    cursor:pointer;
`
const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;

`