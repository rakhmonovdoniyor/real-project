import React from "react";
import {
  Button,
  ButtonWrapper,
  CarWrapper,
  CardContainer,
  ImgWrapper,
  InfoTitle,
  InforWrapper,
} from "./stylemoto";
import { Campcar } from "../mock/mokdata";
const VMenu = () => {
  const data = Campcar.maindata;
  const dataLength = data.length;
  console.log("data:", data.length);
  return (
    <>
      {data.map((value, key) => {
        return (
          <CardContainer key={key} $Vmenu>
            <ImgWrapper $Vmenu>
              <img src={value.car.photo} alt="car-photo" width={200} />
            </ImgWrapper>
            <InforWrapper $Vmenu>
              <InfoTitle>
                <div>
                  <h1>{value.car.name || "no data"}</h1>
                  <p>{value.car.company || "no data"}</p>
                </div>
                <div>
                  <h2>{value.car.cost || "no data"}</h2>
                  <h2>5.3</h2>
                </div>
              </InfoTitle>
              <ButtonWrapper $Vmenu>
                <Button $Vmenu>Order</Button>
                <Button $Vmenu>Compare</Button>
              </ButtonWrapper>
            </InforWrapper>
          </CardContainer>
        );
      })}
    </>
  );
};

export default VMenu;