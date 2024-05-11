import styled from "styled-components";

export const Container =styled.div`
display: flex;
`


export const BoxWRapper =styled.div`
display: flex;

/* height: 1001px; */
`

export const Box1 =styled.div`
display: flex;
flex: 4;
flex-direction: column;
padding-left: 50px;
gap: 10px;
`

export const Box2 =styled.div`
display: flex;
flex:3;
width: 450px;
height: 382px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid rgba(0, 109, 171, 0.10);
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
flex-direction: column;
align-items: center;
margin-right:${(props) => (props.$flex2 ? "" : "")};
/* justify-content: center;  */
`
export const Line707 = styled.div`
width: 707px;
height: 1px;
background: rgba(55, 55, 55, 0.30);
`
// export const TExtWrap = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// `

// export const InputWrapCon = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// gap: 10px;
// input{
// display: flex;
// text-align: left;
// width: 400px;
// height: 50px;
// border-radius: 8px;
// border: none;
// background-color: 
// rgb(220, 220, 220);
// /* color: white; */
// }
// `
// export const BTN=styled.button`
// border-radius: 10px;
// background: var(--blue, #006DAB);
// width: 400px;
// height: 50px;
// border: none;
// color: #FFF;
// font-family: Montserrat;
// font-size: 16px;
// font-style: normal;
// font-weight: 500;
// line-height: 100%; /* 16px */
// `

export const FlexWrap = styled.div`
display: flex;

`

export const Flex1 = styled.div`
display: flex;
flex: 3;
flex-direction: column;
gap: 12px;
/* padding-left: 50px; */
/* border-radius: 20px; */
align-items: center; 
justify-content: center;
`
 export const BigInput = styled.div`
 display: flex;
 flex: 2;
/* border: 1px solid blue; */
 `

export const InputContainer = styled.div`
display: flex;
width: 550px;
height: 382px;
border-radius: 10px;
/* border: 1px solid rgba(0, 109, 171, 0.10); */
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
flex-direction: column;
align-items: center;

`
export const TExtWrap =styled.div`
 display: flex;
 justify-content: center;
align-items: center;
`
export const InputWrapCon =styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
input{
display: flex;
text-align: left;
width: 400px;
height: 50px;
border-radius: 8px;
border: none;
background-color: 
rgb(220, 220, 220);
/* color: white; */
}
`
export const BTN =styled.div`
border-radius: 10px;
background: var(--blue, #006DAB);
width: 400px;
height: 50px;
border: none;
color: #FFF;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 16px */
/* text-align: center; */
display: flex;
align-items: center;
justify-content: center;
`
export const BTNWrap =styled.div`
display: flex;

`