import React, { useState } from 'react'
// import { CatalogWrap, Container, FilterWrap,ItemWRap, ItemLeft, ItemRight, Wrapper, Button, BtnWrap, Threephoto } from '../homeFilter/styled'
import { BgWrap } from './style'
// import {BrandText, Allp, BrandItems, BrandWrap,  FlexInput, Hash, InputAll, Inputwrap, Inputwrap2, Line, TwoButton, TwoButton1, MiniWrap, Minip,  } from '../homeFilter/styled'
// import minicar from "../../assets/Rectangle 705.png"
import { CampingPlaces } from "./data"
// import menu from "../../assets/clarity_grid-view-solid.png"
// import navmenu from "../../assets/ic_round-view-list.png"
import HMenu from './index'
import VMenu from '../main/Vhmenu'

export const CampingPlace = () => {
  const [active, setActive] = useState(false)
    const data = CampingPlaces.maindata;
    const dataLength = data.length;
    function handleVMenu() {
      setActive(false);
    }
    function handleHMenu(){
      setActive(true)
    }
    console.log("data:" , data);
  return (
    <div>
        <BgWrap $campplace >
        <h3> Home / Motors</h3> <br /> <br />
          <h2>Our ranges</h2> <br /> <br />
          <h1>Used Car</h1> <br /> <br />
        </BgWrap>
    
                <>{active ? <VMenu/> : <HMenu/>}</>

               
    </div>
  )
}
export default CampingPlace;