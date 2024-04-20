import React from "react";
import { BtnWrap, Button, CarWrap, CardWrap, StarWrap, StarWrap2 } from "../home/styled";
import { Campcar } from "../mock/mosckdata";
import star from "../../assets/bx_bxs-star.png"

const HMenu = () => {
  const data = Campcar.maindata;
  const dataLength = data.length;
  console.log("data:", data.length);
  return (
    <CardWrap>
                    
    { 
        data.map((value, key) => {
            return(
                <CarWrap key={key}>
                    <img src={value.car.photo} alt="car-photo" />
                    <h1>{value.car.name  || "no data" }</h1>
                    <StarWrap>
                    <p>{value.car.company  || "no data"}</p>
                    <StarWrap2><img src={star} alt="startr" /><p>4.5</p></StarWrap2>
                    {/* <img src={star} alt="startr" /><p>4.5</p> */}
                    </StarWrap> 
                    
                    <h2>{value.car.cost  || "no data"}</h2>
                    
                    <BtnWrap>
                    <Button>Order</Button>
                    <Button>Compare</Button>

                    </BtnWrap>
                    

                </CarWrap>
            );
            })}

</CardWrap>
  );
};

export default HMenu;