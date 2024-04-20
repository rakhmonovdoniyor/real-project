import { Link } from "react-router-dom";
import styled from "styled-components";
// import backimg from "../assets/imagg1.png"


export const Container = styled.div`
display: flex;
padding: 10px 10px;
`
export const LogoWrapper = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
`
export const NavMiddle = styled.div`
flex: 3;
display: flex;
justify-content: space-around;
align-items: center;
p{
    cursor: pointer;
        
}
`
export const Container4 = styled.div`
flex: 1;
display: flex;
justify-content: space-evenly;
align-items: center;
p{
    cursor: pointer;
}
img{
    /* margin-right: 20px; */
    cursor: pointer;
}
`
export const NavLink = styled(Link)`

color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-decoration: none;
`

// export const BgWrap = styled.div`
// background-image: url(${backimg});
// background-position: center;
// background-repeat: no-repeat;
// background-size: cover;
// height: 500px;
// width: 700px;
// `