import React, { useState } from 'react'
import { CatalogWrap, Container, FilterWrap,ItemWRap, ItemLeft, ItemRight, Wrapper, Button, BtnWrap, Threephoto } from '../homeFilter/styled'
import { BgWrap } from './style'
import {BrandText, Allp, BrandItems, BrandWrap,  FlexInput, Hash, InputAll, Inputwrap, Inputwrap2, Line, TwoButton, TwoButton1, MiniWrap, Minip,  } from '../homeFilter/styled'
import minicar from "../../assets/Rectangle 705.png"
import { UsedCarCampcar } from "./mockdata"
import menu from "../../assets/clarity_grid-view-solid.png"
import navmenu from "../../assets/ic_round-view-list.png"
import HMenu from './index'
import VMenu from '../main/Vhmenu'

export const UsedCar = () => {
  const [active, setActive] = useState(false)
    const data = UsedCarCampcar.maindata;
    const dataLength = data.length;
    function handleVMenu() {
      setActive(false);
    }
    function handleHMenu(){
      setActive(true)
    }
    console.log("data:" , data);
  return (
    <Container>
        <BgWrap $usedcar >
        <h3> Home / Motors</h3> <br /> <br />
          <h2>Our ranges</h2> <br /> <br />
          <h1>Used Car</h1> <br /> <br />
        </BgWrap>
        <Wrapper>
            <FilterWrap>
        

        <FlexInput>
        <Inputwrap>

<Hash>Cost of car</Hash> 
<Line></Line> <br /> <br />


<Inputwrap2>

<div>
<p>from</p>
<input  type="text" />
</div>
<p></p>

<div>
<p>to</p>
<input type="text" />
</div>


</Inputwrap2>



</Inputwrap>

<BrandWrap> 
<BrandText>
<h3>Brand</h3><br />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
  <g clip-path="url(#clip0_30_765)">
    <path d="M14.2046 4.375L7.95459 10.625L1.70459 4.375" stroke="black" stroke-width="2"/>
  </g>
  <defs>
    <clipPath id="clip0_30_765">
      <rect width="15" height="15" fill="white" transform="matrix(0 1 -1 0 15.4546 0)"/>
    </clipPath>
  </defs>
</svg>

</BrandText>
           
            <Line></Line>
            <BrandItems style={{paddingTop: 50}}>
            <InputAll $inputleft type="checkbox"  name="" id="" /> <Allp $inputleft>Aidal</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>Knal</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>escape</Allp>

            </BrandItems>
            
           
        </BrandWrap>

        <BrandWrap> 
<BrandText>
<h3>Company</h3><br />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
  <g clip-path="url(#clip0_30_765)">
    <path d="M14.2046 4.375L7.95459 10.625L1.70459 4.375" stroke="black" stroke-width="2"/>
  </g>
  <defs>
    <clipPath id="clip0_30_765">
      <rect width="15" height="15" fill="white" transform="matrix(0 1 -1 0 15.4546 0)"/>
    </clipPath>
  </defs>
</svg>

</BrandText>
           
            <Line></Line>
            <BrandItems style={{paddingTop: 50}}>
            <InputAll $inputleft type="checkbox"  name="" id="" /> <Allp $inputleft>escape</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>Aidal</Allp>
            </BrandItems>
{/* 
            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>Aidal</Allp>

            </BrandItems> */}
            
           
        </BrandWrap>

        <BrandWrap> 
<BrandText>
<h3>License type</h3><br />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
  <g clip-path="url(#clip0_30_765)">
    <path d="M14.2046 4.375L7.95459 10.625L1.70459 4.375" stroke="black" stroke-width="2"/>
  </g>
  <defs>
    <clipPath id="clip0_30_765">
      <rect width="15" height="15" fill="white" transform="matrix(0 1 -1 0 15.4546 0)"/>
    </clipPath>
  </defs>
</svg>

</BrandText>
           
            <Line></Line>
            <BrandItems style={{paddingTop: 50}}>
            <InputAll $inputleft type="checkbox"  name="" id="" /> <Allp $inputleft>1 year</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>2 year</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>1.5 year</Allp>

            </BrandItems>
            
           
        </BrandWrap>

        <BrandWrap> 
<BrandText>
<h3>Number of travelers</h3><br />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
  <g clip-path="url(#clip0_30_765)">
    <path d="M14.2046 4.375L7.95459 10.625L1.70459 4.375" stroke="black" stroke-width="2"/>
  </g>
  <defs>
    <clipPath id="clip0_30_765">
      <rect width="15" height="15" fill="white" transform="matrix(0 1 -1 0 15.4546 0)"/>
    </clipPath>
  </defs>
</svg>

</BrandText>
           
            <Line></Line>
            <BrandItems style={{paddingTop: 50}}>
            <InputAll $inputleft type="checkbox"  name="" id="" /> <Allp $inputleft>2</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>3-4</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>5+</Allp>

            </BrandItems>
            
           
        </BrandWrap>

        <BrandWrap> 
<BrandText>
<h3>Location</h3><br />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
  <g clip-path="url(#clip0_30_765)">
    <path d="M14.2046 4.375L7.95459 10.625L1.70459 4.375" stroke="black" stroke-width="2"/>
  </g>
  <defs>
    <clipPath id="clip0_30_765">
      <rect width="15" height="15" fill="white" transform="matrix(0 1 -1 0 15.4546 0)"/>
    </clipPath>
  </defs>
</svg>

</BrandText>
           
            <Line></Line>
            <BrandItems style={{paddingTop: 50}}>
            <InputAll $inputleft type="checkbox"  name="" id="" /> <Allp $inputleft>Seoul</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>Korea</Allp>
            </BrandItems>

            <BrandItems>
            <InputAll $inputleft type="checkbox" name="" id="" /> <Allp $inputleft>Pusan</Allp>

            </BrandItems>
            
           
        </BrandWrap>

        <TwoButton>
            <TwoButton1>Cancel</TwoButton1>
            <TwoButton1 $btn2>Serach</TwoButton1 >
        </TwoButton>



        <MiniWrap>
            <Minip>
            <p>Compare</p>
            </Minip>
            <Threephoto>
              
            <img src={minicar} alt="" />
            <img src={minicar} alt="" />
            <img src={minicar} alt="" />
            </Threephoto>

        </MiniWrap>

        </FlexInput>
            </FilterWrap>


            <CatalogWrap>
                <ItemWRap>
                    <ItemLeft>
                        <p>Item</p>
                        <p style={{ color:" #006dab"}}>{dataLength}</p>

                    </ItemLeft>

                    <ItemRight>
                        <p>Sort by</p>
                        <input type="text" placeholder='Select' />
                        <input style={{width:60}} type="text" placeholder='60' />
                        <BtnWrap $iconBtn>
                          <Button $iconBtn onClick={handleVMenu}>
                          <img src={menu} alt="menu-h" />
                          </Button>
                        <Button $iconBtn onClick={handleHMenu}>
                        <img src={navmenu} alt="nv-menu" />
                        </Button>
                       

                        </BtnWrap>
                        
                    </ItemRight>

                </ItemWRap>
                <>{active ? <VMenu/> : <HMenu/>}</>

               

            </CatalogWrap>
        </Wrapper>

    </Container>
  )
}
export default UsedCar;