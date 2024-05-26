import styled from "styled-components";

import usedcars from "../../assets/campingplace/image.png"
import backrasm from "../../assets/campingplace/image.png"
import tooning from "../../assets/campingplace/image.png"
import rooms from "../../assets/campingplace/image.png"

export const BgWrap=styled.div`
background-image: ${(props) => {
    if (props.$campplace) {
      return `url(${backrasm})`;

    } else if (props.$campplace) {
      return `url(${tooning})`;

    } else if (props.$campplace) {
      return `url(${rooms}})`;

    } else if (props.$campplace) {
      return `url(${usedcars}})`;

    } else {
      return 'url("path-to-default-image.jpg")'; // Default background image
    }
  }};
background-size: 100% 100%;
  background-repeat: no-repeat; 
  width: 100%;
height: 500px;
display:flex;
align-items:center;
justify-content:center; 
text-align:center; 

color: white;
`

export const Center =styled.div`
display: ${(props) => (props.$grid ? "" : "flex")};
flex-direction:  ${(props) => (props.$grid ? "column" : "")} ;
justify-content: center;
align-items: center;
`
export const Cen =styled.div`
display: block;
`
export const CardWrap = styled.div`
/* display: flex; */
padding: 100px;
display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`
export const CardWrap2 = styled.div`
/* display: flex; */

`

export const Placeimg6 = styled.div`
display: flex;
gap: 20px;
`
export const CardWrap4 = styled.div`
display: flex;
gap: 20px;
`

export const CardWrap5 = styled.div`
/* display: flex; */
padding: 100px;

`

export const BoxWrap = styled.div`
display: flex;
/* justify-content: center; */
padding: 20px 0;
a{
  color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-decoration: none;
padding-right: 20px;
}
button {
  border: 1px solid ;
  color: var(--sariq, #FF7A00);
font-family: "Montserrat";
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
border-radius: 5px;
width: 120px;
height: 25px;
cursor: pointer;
transition: 0.5s;
background-color: white;

}
button:hover {
  background-color: #FF7A00;
  color: white;
}
`
export const BoxWrap2 = styled.div`
display: flex;
/* gap: 10px; */
.LocationOnIcon{
  color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`
export const BoxWrap3 = styled.div`
display: flex;
/* flex: 1; */
/* border: 1px solid red; */

p {
  padding-left: 10px;
  color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`
export const BoxWrap4 = styled.div`
/* display: flex; */
flex: 3;
/* border: 1px solid blue; */
display: grid;
gap: 10px;
/* gap: 50px; */

`
export const Line = styled.div`
border: 1px solid;
color: rgba(55, 55, 55, 0.20);
width: 100%;
margin-bottom: 20px;
`
export const Wrapper2 = styled.div`
/* display:flex ; */
flex: 1;
/* border: 1 px solid blue; */
p{
  padding-left: 10px;
  color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`
export const Karta =styled.div`
display: flex;
justify-content: center;
align-items: center;

/* border: 1px solid red; */
`
export const Desc = styled.div`
display: flex;
flex-direction: column;
h3{
  color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-decoration: none;
padding: 20px 0;
}
p{
  padding-bottom: 30px;
}
`