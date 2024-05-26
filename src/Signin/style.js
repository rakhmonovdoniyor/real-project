import styled from "styled-components";

export const RegWrapper = styled.div`
width: 500px;
height: 530px;
border-radius: 10px;
/* border: 1px solid red; */
padding: 10px;

`

export const REgh1 =styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
padding: 20px 0;
h1{
    color: var(--text, #373737);
font-family: "Open Sans";
font-size: 27px;
font-style: normal;
font-weight: 1500;
line-height: normal;
}
`
export const Inputwrap = styled.div`
width: 100%;
display:grid;
gap: 20px;
p{
    padding-left: 10px;
}
`

export const Input1 = styled.input`
width: 100%;
height: 50px;
/* background-color: ; */
border-radius: 10px;
background-color: rgba(55, 55, 55, 0.10);
border: none;

`
export const Flex =styled.div`
display: flex;
`
export const Checkbox = styled.div`
display: flex;
justify-content: space-between;
input{
    background-color: rgba(55, 55, 55, 0.10);
    width: 30px;
   
}
`
export const BtnReg = styled.div`
display: flex;
text-align: center;
justify-content: center;
align-items: center;
width: 100%;
height: 50px;
border-radius: 10px;
background-color:  ${(props) => (props.$create ? "#fff" : "#006DAB")} ;
border: 3px solid #006DAB;
color:  ${(props) => (props.$create ? "#006DAB" : "#fff")};
font-family: "Open Sans";
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor: pointer;

button:hover{
    background-color: ${(props) => (props.$create ? "#006DAB" : "#fff")};
    color: ${(props) => (props.$create ? "#fff" : "#006DAB")};
    background-color: #006DAB;
    color: white;
}

`


export const Or =styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const ThreeIcon = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
`