import React from 'react'
import img1 from "../assets/Camper (1).png"
import img2 from "../assets/bx_bxs-user.png"
import img3 from "../assets/clarity_shopping-cart-solid.png"
// import { Link } from 'react-router-dom'
import { Container, Container4, LogoWrapper, NavDisplay, NavLink, NavMiddle } from './navbar11'
import PopUp from '../popup/inex'
import { Login } from '../Signin/login'
// import { HomeCom } from '../components/home'

export const Navbar = () => {
  return (
    <Container>
        <LogoWrapper>
            <img src={img1} alt="logo-image" />
        </LogoWrapper>
        <NavMiddle>
            <NavLink to= "Motor"> <NavDisplay>
              <p>Motor</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
  <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2"/>
</svg>
              </NavDisplay>
            </NavLink >
            <NavLink to= "caravan"><p>Caravan</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
  <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2"/>
</svg>
            </NavLink>
            <NavLink to="tuning"><p>Tuning</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
  <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2"/>
</svg>
            </NavLink>
            <NavLink to="used-car"><p>Used Car</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
  <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2"/>
</svg>
            </NavLink>
            <NavLink to="camping-place"><p>Camping Place</p>
            </NavLink>
            
        </NavMiddle>
        <Container4>
          <Login>
            <img src={img2} alt="logo-sign" />
            </Login>
            <img src={img3} alt="logo-shop2" />
            <p>Eng</p>
        </Container4>
     
    </Container>
   
  )
}
