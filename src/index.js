import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar/navbar';

import{ Tuning} from './components/tuning/tuningfilter';
import { CampingPlace } from './components/campingplace/filter';
import { HomeCom } from './components/homeFilter';
import { Footer } from './footer/futer';
import Caravan from './components/caravan/filter';
import { Detail } from './DetailPage/index';
import { UsedCar } from './components/usedcar/filter';
import { CaravanDetail } from './DetailPage/caravandetail';
import { TuningDetail } from './DetailPage/tuningdetail';
import { UsedDetail } from './DetailPage/usedcar';
import { CarouselComponent } from './homepage/carousel';
import { DetailPlace } from './components/campingplace/detail';
import { Register } from './Signin/register';

// import App from './Navbar/backround';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<BrowserRouter>
<Navbar/>
    <Routes>
   
      <Route path='/' element={<CarouselComponent/> } />
      <Route path='/Motor' element={<HomeCom/> } />
      <Route path='/caravan' element={<Caravan/> } />
      <Route path='/tuning' element={<Tuning/> } />
      <Route path='/used-car' element={<UsedCar/> } />
      <Route path='/camping-place' element={<CampingPlace/> } />
      <Route path='/Motor/:id' element = {<Detail/>}/>
      <Route path='/caravan/:id' element = {<CaravanDetail/>}/>
      <Route path='/tuning/:id' element = {<TuningDetail/>}/>
      <Route path='/used-car/:id' element = {<UsedDetail/>}/>
     < Route path='/camping-place/:id' element = {<DetailPlace/>}/>
      <Route path='/createaccount' element ={<Register/>}/>
    </Routes>
  <Footer/>
  </BrowserRouter>
    
  </React.StrictMode>
);

