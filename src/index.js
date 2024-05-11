import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar/navbar';

import{ Tuning} from './components/tuning/tuningfilter';
import { CampingPlace } from './components/campingplace';
import { HomeCom } from './components/homeFilter';
import { Footer } from './footer/futer';
import Caravan from './components/caravan/filter';
import { Detail } from './DetailPage';
import { UsedCar } from './components/usedcar/filter';

// import App from './Navbar/backround';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<BrowserRouter>
<Navbar/>
    <Routes>
   
      <Route path='/' element={<HomeCom/> } />
      <Route path='/Motor' element={<HomeCom/> } />
      <Route path='/caravan' element={<Caravan/> } />
      <Route path='/tuning' element={<Tuning/> } />
      <Route path='/used-car' element={<UsedCar/> } />
      <Route path='/camping-place' element={<CampingPlace/> } />
      <Route path='/Motor/:id' element = {<Detail/>}/>
      <Route path='/caravan/:id' element = {<Detail/>}/>
      <Route path='/tuning/:id' element = {<Detail/>}/>
      <Route path='/used-car/:id' element = {<Detail/>}/>
      
    </Routes>
  <Footer/>
  </BrowserRouter>
    
  </React.StrictMode>
);

