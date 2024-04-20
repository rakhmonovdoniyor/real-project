import React from 'react'
import img1 from "../assets/Camper (1).png"
import img2 from "../assets/bx_bxs-user.png"
import img3 from "../assets/clarity_shopping-cart-solid.png"
// import { Link } from 'react-router-dom'
import { Container, Container4, LogoWrapper, NavLink, NavMiddle } from './navbar11'
import { HomeCom } from '../components/home'

export const Navbar = () => {
  return (
    <Container>
        <LogoWrapper>
            <img src={img1} alt="logo-image" />
        </LogoWrapper>
        <NavMiddle>
            <NavLink to= "Motor"><p>Motor</p>
            </NavLink >
            <NavLink to= "caravan"><p>Motor</p>
            </NavLink>
            <NavLink to="tuning"><p>Motor</p>
            </NavLink>
            <NavLink to="used-car"><p>Motor</p>
            </NavLink>
            <NavLink to="camping-place"><p>Motor</p>
            </NavLink>
            
        </NavMiddle>
        <Container4>
            <img src={img2} alt="logo-shop" />
            <img src={img3} alt="logo-shop2" />
            <p>Eng</p>
        </Container4>
     
    </Container>
   
  )
}
