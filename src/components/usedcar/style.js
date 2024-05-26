import styled from "styled-components";
import backrasm from "../../assets/wp10195013.jpg"
import tooning from "../../assets/image.png"
import rooms from "../../assets/campingplace/image.png"
import usedcars from "../../assets/campingplace/image.png"

export const BgWrap=styled.div`
background-image: ${(props) => {
    if (props.$usedcar) {
      return `url(${backrasm})`;

    } else if (props.$tuning) {
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
flex-direction: column;
color: white;
h3{
  color: #FFF;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;

}
h2{
  color: #FFF;
font-family: Montserrat;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
h1{
  color: #FFF;
font-family: Montserrat;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

/* background: linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat; */


 `