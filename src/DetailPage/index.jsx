import React from 'react'
import { BgWrap} from '../components/homeFilter/styled'
import { BigCon, Carphoto, Container, Data, Data1, Data2, DetailCom , DataWrapperbox, Linestyle, CarCost, ItemOneLine , TextStylep, TextStylep1, ComfortText, ComfortPhoto, ComWrapper, PWRap, DetailButton, BTnWrap} from './style'
import { useParams } from 'react-router-dom'
import { Campcar } from '../components/mock/mosckdata'
import BasicTabs from './tabs/tab'

export const Detail = () => {
  const { id } = useParams() ;
  const resultdata = Campcar.maindata.find(
  (value) => value.id === parseInt(id));
  console.log(resultdata);
  // console.log(resultdata.id)
  return (
    <div >
      
        <BgWrap $home >
        
          <h1>{resultdata.car.name}</h1> <br /> <br />
          <DetailCom>
            <BTnWrap>
          <DetailButton>ADD TO CART</DetailButton>
          <DetailButton>COMPARE</DetailButton>
          </BTnWrap>
          </DetailCom>
          
        </BgWrap>

        <BigCon>
        <Container>

        
        <Carphoto>
        <img src= {resultdata.car.photo || "no data"}  alt="id1" />
        </Carphoto>

        <Data>
          <DataWrapperbox>
           <Data1>
            <h1> {resultdata.car.name  || "no data"}</h1>
               <CarCost $cost> {resultdata.car.cost}</CarCost>

           </Data1>
           <Linestyle/>
           <Data2>
            <ItemOneLine><TextStylep1>Company </TextStylep1> <TextStylep> {resultdata.car.company  || "no data"}</TextStylep></ItemOneLine>
            <ItemOneLine><TextStylep1>People </TextStylep1> <TextStylep> {resultdata.car.people  || "no data"} </TextStylep></ItemOneLine>
            <ItemOneLine><TextStylep1>License type </TextStylep1> <TextStylep> {resultdata.car.license  || "no data"} </TextStylep></ItemOneLine>
            
                </Data2>
                </DataWrapperbox>

        </Data>

        
        </Container>
        
        <ComWrapper>
          <ComfortText>
            <h1>Comfort</h1>
            <PWRap>
            <p>{resultdata.car.desc.comfort1}</p>
            </PWRap>
           
          </ComfortText>
          <ComfortPhoto><img src={resultdata.car.desc.cmfphoto  || "no data"} alt="idphoto" /></ComfortPhoto>
          </ComWrapper>


          <ComWrapper>
          <ComfortPhoto><img src={resultdata.car.desc.cmfphoto2  || "no data"} alt="idphoto" /></ComfortPhoto>
          <ComfortText>
            <h1>Tidying away is child’s play!</h1>
            <PWRap>
            <p>{resultdata.car.desc.comfort2  || "no data"}</p>
            </PWRap>
           
          </ComfortText>
          </ComWrapper>

          <ComWrapper>
          <ComfortText>
            <h1>Ventilated , Lit up</h1>
            <PWRap>
            <p>{resultdata.car.desc.comfort3  || "no data"}</p>
            </PWRap>
           
          </ComfortText>
          <ComfortPhoto><img src={resultdata.car.desc.cmfphoto3  || "no data"} alt="idphoto" /></ComfortPhoto>
          </ComWrapper>


          <ComWrapper>
          <ComfortPhoto><img src={resultdata.car.desc.cmfphoto4  || "no data"} alt="idphoto" /></ComfortPhoto>
          <ComfortText>
            <h1>Easy access</h1>
            <PWRap>
            <p>{resultdata.car.desc.doors  || "no data"}</p>
            </PWRap>
           
          </ComfortText>
          </ComWrapper>


          <ComWrapper>
          <ComfortText>
            <h1>Heating when driving</h1>
            <PWRap>
            <p>{resultdata.car.desc.heating}</p>
            <BTnWrap>
            <DetailButton $blue>ADD TO CART</DetailButton>
            <DetailButton $blue>COMPARE</DetailButton>
            </BTnWrap>
            
            </PWRap>
           
          </ComfortText>
          <ComfortPhoto><img src={resultdata.car.desc.heatphoto} alt="idphoto" /></ComfortPhoto>
          </ComWrapper>


        <BasicTabs/>




        </BigCon>


        
    </div>
  )
}
