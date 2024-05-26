import styled from "styled-components";

export const Container = styled.div`
display: flex;
width: 100%;
height: 100px;
flex-shrink: 0;
`
export const Input = styled.div`
width: 150px;
padding: 10px ;
border: 1px solid black;
`


export const First = styled.div`
display: flex;
flex: ${(props) => (props.$prem ? "1" : "1")};
padding-left: ${(props) => (props.$prem ? "40px" : "")} ;
align-items: center;
justify-content: end;
/* border: 1px solid blue; */
`
export const CenterDiv = styled.div`
display: flex;
/* flex-direction: column; */
flex: ${(props) => (props.$small ? "1" : "7")};
align-items: center;
justify-content: space-between;
/* border: 1px solid red; */
`
export const EndDiv = styled.div`
flex: 1;
display: flex;
flex-direction: column;
/* align-items:center ; */
/* justify-content: center; */
/* border: 1px solid red; */
`
export const Line1 = styled.div`
display: flex;
 align-items: center; 
/* justify-content: center; */

`
 export const Column1 = styled.div`
display: flex;
flex-direction: column;
flex: 3;

 `
 export const FarLIne = styled.div`
width:100%;
height: 1px;
background-color: rgba(55, 55, 55, 0.15);
border: 1px solid rgba(55, 55, 55, 0.15);
 `

export const Smallp = styled.div`
color: rgba(55, 55, 55, 0.70);
font-family: Monst;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
` 
export const ContactWrap =styled.div`
display: flex;
`
export const Karta =styled.div`
display: flex;
flex: 3;
flex-direction: column;
align-items: center;
`
export const KartaRasm =styled.div`
width: 707px;
height: 298px;
flex-shrink: 0;
`

export const InputTwo =styled.input`
width: 340px;
height: 109px;
flex-shrink: 0;
border-radius: 8px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
`
export const InputWrap =styled.div`
display: flex;
gap: 30px;
padding-top: 10px;
`

export const BtnHover =styled.div`
padding-left: 90px;
:hover {
    background-color: blue;
    color: white;
}
`