import styled from "styled-components";
import backrasm from "../../assets/imagg1.png"

export const Container =styled.div`
display: flex;
flex-direction: column;
/* margin-right: 50px; */
`
export const BgWrap=styled.div`
background-image: ${(props) => {
    if (props.$home) {
      return `url(${backrasm})`;
    // } else if (props.$rooms) {
    //   return `url(${rooms})`;
    // } else if (props.$facilities) {
    //   return `url(${faci})`;
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

export const Wrapper = styled.div`
display: flex;


padding: 15px 10%;

`
export const FilterWrap = styled.div`
flex:2 ;
margin-right: 30px;
`
export const CatalogWrap = styled.div`
flex: 8;

`



export const Flex = styled.div`
display: flex;
margin-right: 200px;
margin-left: 200px;
/* justify-content: center;
align-items: center; */
`
export const FlexInput = styled.div`
display: flex;
flex: 2;
/* border: 1px solid red; */
flex-direction: column;
/* justify-content: center; */
align-items: center;
`
export const FlexCaravan = styled.div`
display: flex;
flex: 8;
/* align-items: center; */
justify-content: center;

/* border: 1px solid blue; */
`

export const Inputwrap = styled.div`
display: flex;
margin-top: 50px;
flex-direction: column;
justify-content:center;

`
export const Line = styled.h1`
width: 280px;
height: 1px;
border: 1px solid ;
color: rgba(55, 55, 55, 0.50);;

`
export const Hash = styled.h3`
color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
/* display: flex; */
/* flex: 3; */

/* border: 1px solid blueviolet; */
`

export const Inputwrap2 = styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
/* flex-direction: column; */
/* gap: 20px; */
p{
    width: 20px;
}
div{
}
input {
    width: 90px;
    height: 36px;
    border-radius: 10px;
    border: 1px solid rgba(55, 55, 55, 0.60);
   
}
`

export const BrandWrap =styled.div`
display: flex;
flex-direction: column;
margin-top: 30px;

`
export const BrandText = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 30px 0;
`
export const BrandItems = styled.div`
display: flex;
align-items: center;
/* padding: 30px 0 ; */
/* justify-content: center; */

`
export const InputAll = styled.input`
width: 22px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
/* border: 1px solid #666; */
background: #FFF;
/* margin-left: ${(props) => 
props.$inputleft ? "80px" : ""}; */
/* display: flex;
gap: 20px; */
`

export const Allp =styled.p`
color: var(--text, #373737);
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
margin-left: ${(props) => 
props.$inputleft ? "10px" : ""};
/* display: flex;
gap: 30px; */
padding: 10px;
`
export const TwoButton = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 50px;
`
export const TwoButton1 =styled.button`
width: 115.804px;
height: 38.968px;
flex-shrink: 0;
border-radius: 60px;
background: ${(props) => 
props.$btn2 ? "#006DAB" : "#FF7A00"} ;
border: none;
color: #FFF;
font-family: "Open Sans";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
`

export const MiniWrap = styled.div`
display: flex;
/* align-items: center;
justify-content: center; */
flex-direction: column;
`
export const Minip = styled.div`
margin-top: 40px;
p{
    color: var(--blue, #006DAB);
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

`
export const Threephoto =styled.div`
display: flex;
`

export const Farline =styled.div`
display: flex;
flex: 3;
`
export const Farline2 =styled.div`
display: flex;
flex: 3;
/* margin-left: 500px; */
`

export const CardWrap =styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 15px;

`

export const ItemWRap=styled.div`
display: flex;
border-bottom: 2px solid  rgba(55, 55, 55, 0.50); 
margin: 38px 0;

`
export const ItemLeft=styled.div`
flex: content;
display: flex;
p{
    margin-right: 10px;
}
`
export const ItemRight=styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: end;
input{
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin-left: 10px;
}
`
export const CarWrap=styled.div`
border-radius: 20px;
display: flex;
width: 223px;
height: 307px;
flex-direction: column;
justify-content: center;
/* align-items: center; */
flex-shrink: 0;
padding: 10px;
/* gap: 5px; */
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
h1{
    font-size: 15px;
}
h2{
    color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding: 5px 0px;

}
`
export const BtnWrap =styled.div`
display: flex;
/* align-items: center; */
justify-content: space-between;
margin-left: ${(props) => (props.$iconBtn ? "10px" : "")};
margin-top: ${(props) => (props.$iconBtn ? "0px" : "10px")};
:hover{
    color: white;
    background-color: #006DAB;
}
`

export const Button = styled.button`
/* padding: 5px; */
padding:  ${(props ) => (props.$iconBtn ? "1px 5px" : "6px")};
width:  ${(props) => (props.$iconBtn ? "fit-content" : "95px")};
background-color: transparent;
border-radius: ${(props) => (props.$iconBtn ? "5px" : "12px")};
border:${(props) => (props.$iconBtn ? "1px solid #3737374d" : "2px solid  #006dab  ")};
color: #006dab;
font-size: 18px;
cursor: pointer;
`

export const StarWrap =styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const StarWrap2 =styled.div`
display: flex;
align-items: center;
justify-content: end;
`

export const ImgWrapper = styled.div`
  flex: ${(props) => (props.$Vmenu ? "1" : "1")};
  display: flex;
  justify-content: center;
`;

export const CardContainer = styled.div`
  border-radius: 20px;
  padding: 15px;
  display: flex;
  flex-direction: ${(props) => (props.$Vmenu ? "row" : "column")};
  justify-content: space-between;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  h1 {
    font-size: 20px;
    font-weight: 500;
  }
  h2 {
    font-size: 20px;
    color: #006dab;
  }
`;
export const CarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`;
export const InforWrapper = styled.div`
  flex: ${(props) => (props.$Vmenu ? "3" : "1")};
  display: flex;
  flex-direction: column;
`;