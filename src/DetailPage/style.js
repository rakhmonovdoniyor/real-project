import styled from "styled-components";
export const BigCon = styled.div`
width: 1512px;
border: 1px solid red;
/* display: flex;
justify-content: center;
align-items: center; */
` 
export const DetailCom =styled.div`
display: flex;
`

export const Container = styled.div`
display: flex;
padding-top: 20px;

`
export const Carphoto = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: end;
img {
    width: 626px;
height: 381px;
padding-right: 20px;
}
`
export const Data = styled.div`
display: flex;
flex: 1;
flex-direction: column;
`

export const DataWrapperbox =styled.div`
width: 600px;
height: 360px;
border-radius: 10px;
background: #FFF;

/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
`
export const Data1 = styled.div`

display: flex;
justify-content: space-between;
/* flex-direction: column; */
padding: 5%;

`
export const CarCost = styled.h1`
color: #006DAB;
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const Data2 = styled.div`
display: flex;
flex-direction: column;
/* align-items: center; */
justify-content: space-evenly;
padding: 5%;
`
 export const Linestyle = styled.div`
width: 560px;
height: 1px;
background: rgba(55, 55, 55, 0.30);
`
 export const ItemOneLine = styled.div`
display: flex;
justify-content: space-between;

 `
 export const TextStylep = styled.p`
color: rgba(55, 55, 55, 0.80);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const TextStylep1 = styled.p`
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

export const ComWrapper = styled.div`
display: flex;
`

export const ComfortText = styled.div`
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
flex: 1;


p{
    color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
}
`
export const PWRap = styled.div`
width: 533px;
height: 169px;
flex-shrink: 0;

`

export const ComfortPhoto = styled.div`
width: 100%;
flex: 1;
img{
    width: 755px;
}
`

export const BTnWrap= styled.div`
display: flex;
padding: 50px 0;

:hover {
    color: white;
    background-color: #006dab;
   
  }
/* justify-content: space-evenly; */
`

export const DetailButton = styled.button`
width: 180px;
height: 50px;
border-radius: 10px;
/* background: #FAFAFA; */
cursor: pointer;
color:  ${(props) => (props.$blue ? "#006dab" : "white")};
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
background-color: transparent;
margin-right: 10px;
border-radius: 10px;
border:  ${(props) => (props.$blue ? " 2px solid #006dab" : "2px solid white")};
  :hover {
    color: ${(props) => (props.$blue ? "white" : "#006dab")};
    background-color: #006dab;
   border: none;
  }
   
/* background-color: var(--blue, #006DAB); */
/* background-color: transparent; */

`