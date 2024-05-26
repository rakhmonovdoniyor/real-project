import styled from "styled-components";
import rasm1 from "../assets/homepage/image.png"
import rasm2 from "../assets/homepage/image.png"
import rasm3 from "../assets/homepage/image.png"
import rasm4 from "../assets/homepage/image.png"
import rasm5 from "../assets/homepage/image.png"
import rasm6 from "../assets/homepage/image.png"
import rasm7 from "../assets/homepage/image.png"
import rasm8 from "../assets/homepage/image.png"


export const Carousel1 = styled.div`
padding: 100px;
/* display: contents; */
justify-content: center;
align-items: center;
`
export const Carouselimg = styled.div`
display: flex;
width: 100%;
background-position: 100%;
`
export const Popuph1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 50px;
`
// export const Popimg = styled.img.attrs((props) => ({
//   alt: "no img",
//   src: props.$pop1
//     ? pop1
//     : props.$pop1
//     ? pop1
    // : props.$car3
    // ? car3
    // : props.$car4
    // ? car4
    // : props.$im11
    // ? im11
    // : props.$im12
    // ? im12
    // : props.$im13
    // ? im13
    // : props.$im14
    // ? im14

//     : undefined,

// }))`
// `
export const Popimg=styled.div`
background-image: ${(props) => {
    if (props.$pop1) {
      return `url(${rasm1})`;

    } else if (props.$pop2) {
      return `url(${rasm2})`;

    } else if (props.$pop3) {
      return `url(${rasm3}})`;

    } else if (props.$pop4) {
      return `url(${rasm4}})`;

    } else if (props.$pop5) {
      return `url(${rasm5}})`;

    } else if (props.$pop6) {
      return `url(${rasm6}})`;

    } else if (props.$pop7) {
      return `url(${rasm7}})`;

    } else if (props.$pop8) {
      return `url(${rasm8}})`;

    } else {
      return 'url("path-to-default-image.jpg")'; // Default background image
    }
  }};
   background-size: cover;
   background-position: 100%;
  background-repeat: no-repeat; 
  width:300px;
  height: 300px; 
display:flex;
align-items:center;
justify-content:center; 
text-align:center; 
flex-direction: column;
/* color: white; */


/* background: linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat; */

`

export const WrapPopimg = styled.div`
display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`