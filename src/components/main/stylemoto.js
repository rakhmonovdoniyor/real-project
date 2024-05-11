import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  display: flex;

  padding: 20px 15%;
`;

export const FilterWrapper = styled.div`
  flex: 2;
  border: 1px solid green;
`;

export const CatalogWrapper = styled.div`
  flex: 8;
`;
export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #37373780;
  padding: 10px 5px;
  margin-bottom: 20px;
`;
export const ItemLeftWrapper = styled.div`
  flex: 1;
  display: flex;
  p {
    font-size: 18px;
    font-weight: 500;
    margin-right: 5px;
  }
`;
export const ItemRightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;

  input {
    border: 1px solid #3737374d;
    border-radius: 5px;
    padding: 8px;
    margin-left: 10px;
  }
`;
export const CarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
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

export const ImgWrapper = styled.div`
  flex: ${(props) => (props.$Vmenu ? "2" : "1")};
  display: flex;
  justify-content: center;
`;
export const InforWrapper = styled.div`
  flex: ${(props) => (props.$Vmenu ? "3" : "1")};
  display: flex;
  flex-direction: column;
`;
export const InfoTitle = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => (props.$iconBtn ? "" : "10px")};
  margin-left: ${(props) => (props.$iconBtn ? "5px" : "")};
  gap: ${(props) => (props.$Vmenu ? "20px" : "")};
  :hover {
    color: white;
    background-color: #006dab;
  }
`;

export const Button = styled.button`
  flex: ${(props) => (props.$Vmenu ? "1" : "")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: ${(props) => (props.$iconBtn ? "fit-content" : "100px")};
  background-color: transparent;
  border-radius: ${(props) => (props.$iconBtn ? "0px" : "15px")};
  border: ${(props) =>
    props.$iconBtn ? "1px solid #3737374d" : "2px solid #006dab"};
  color: #006dab;
  font-size: 18px;
  cursor: pointer;
`;


