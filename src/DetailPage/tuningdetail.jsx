import React from 'react'
import { BgWrap} from '../components/usedcar/style'
import { Carphoto, Container, Data, Data1, Data2, DetailCom , DataWrapperbox, Linestyle, CarCost, ItemOneLine , TextStylep, TextStylep1, ComfortText, ComfortPhoto, ComWrapper, PWRap, DetailButton, BTnWrap} from './style'
import { useParams } from 'react-router-dom'
import BasicTabs from './tabs/tab'
import { TuningCampcar } from '../components/tuning/mockdatatuning'

export const TuningDetail = () => {
  const { id } = useParams() ;
  // console.log(Campcar);
  // console.log(parseInt (id));
  // const resultdata = Campcar.maindata(id) === parseInt(id)  ;
  const resultdata = TuningCampcar.maindata.find(
  (value) => value.id === parseInt(id));
  console.log(resultdata);
  return (
    <div>
      
        <BgWrap $tuning >
        
          <h1>{resultdata.car.name}</h1> <br /> <br />
          <DetailCom>
            <BTnWrap>
          <DetailButton >ADD TO CART</DetailButton>
          <DetailButton >COMPARE</DetailButton>
          </BTnWrap>
          </DetailCom>
          
        </BgWrap>


        <Container>

        
        <Carphoto>
        <img src= {resultdata.car.photo}  alt="id1" />
        </Carphoto>

        <Data>
          <DataWrapperbox>
           <Data1>
            <h1> {resultdata.car.name}</h1>
               <CarCost $cost> {resultdata.car.cost}</CarCost>

           </Data1>
           <Linestyle/>
           <Data2>
            <ItemOneLine><TextStylep1>Company </TextStylep1> <TextStylep> {resultdata.car.company}</TextStylep></ItemOneLine>
            <ItemOneLine><TextStylep1>People </TextStylep1> <TextStylep> {resultdata.car.people} </TextStylep></ItemOneLine>
            <ItemOneLine><TextStylep1>License type </TextStylep1> <TextStylep> {resultdata.car.license} </TextStylep></ItemOneLine>
            
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
          <ComfortPhoto><img src={resultdata.car.desc.cmfphoto} alt="idphoto" /></ComfortPhoto>
          </ComWrapper>


          <ComWrapper>
          <ComfortPhoto><img src={resultdata.car.desc.cmfphoto2} alt="idphoto" /></ComfortPhoto>
          <ComfortText>
            <h1>Tidying away is child’s play!</h1>
            <PWRap>
            <p>{resultdata.car.desc.comfort2}</p>
            </PWRap>
           
          </ComfortText>
          </ComWrapper>

          <ComWrapper>
          <ComfortText>
            <h1>Ventilated , Lit up</h1>
            <PWRap>
            <p>{resultdata.car.desc.comfort3}</p>
            </PWRap>
           
          </ComfortText>
          <ComfortPhoto><img src={resultdata.car.desc.cmfphoto3} alt="idphoto" /></ComfortPhoto>
          </ComWrapper>


          <ComWrapper>
          <ComfortPhoto><img src={resultdata.car.desc.cmfphoto4} alt="idphoto" /></ComfortPhoto>
          <ComfortText>
            <h1>Easy access</h1>
            <PWRap>
            <p>{resultdata.car.desc.doors}</p>
            </PWRap>
           
          </ComfortText>
          </ComWrapper>


          <ComWrapper>
          <ComfortText>
            <h1>Heating when driving</h1>
            <PWRap>
            <p>{resultdata.car.desc.heating}</p>
            <BTnWrap>
            <DetailButton>ADD TO CART</DetailButton>
            <DetailButton>COMPARE</DetailButton>
            </BTnWrap>
            
            </PWRap>
           
          </ComfortText>
          <ComfortPhoto><img src={resultdata.car.desc.heatphoto} alt="idphoto" /></ComfortPhoto>
          </ComWrapper>


        <BasicTabs/>


        
    </div>
  )
}
