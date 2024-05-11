import React from "react";
import { BtnWrap, Button, CarWrap, CardWrap, StarWrap, StarWrap2 } from "../homeFilter/styled";
// import {  } from "";
import star from "../../assets/bx_bxs-star.png"
import { Link } from "react-router-dom";
import { Campcar } from "../mock/mosckdata";

const HMenu = () => {
  const data = Campcar.maindata;
  const dataLength = data.length;
  console.log("data:", data.length);
  return (
    <CardWrap>
                    
    { 
        data.map((value, key) => {
            return(
              <Link to={`${value.id}`} style={{textDecoration: "none", color: "black"}}>
                <CarWrap key={key}>
                  
                    <img src={value.car.photo} alt="car-photo" style={{width: 200 , height: 140}} />
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
                </Link>
            );
            })}

</CardWrap>
  );
};

export default HMenu;