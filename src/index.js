import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar/navbar';
import { MotorCom } from './components/main/motors';
import { Caravan } from './components/caravan';
import { TuningCom } from './components/tuning';
import { Usedcar } from './components/usedcar';
import { CampingPlace } from './components/campingplace';
import { HomeCom } from './components/home';
import { Footer } from './footer/futer';
// import App from './Navbar/backround';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<BrowserRouter>
<Navbar/>
    <Routes>
      <Route path='/' element={HomeCom } />
      <Route path='/Motor' element={<HomeCom/> } />
      <Route path='/caravan' element={<Caravan/> } />
      <Route path='/tuning' element={<TuningCom/> } />
      <Route path='/used-car' element={<Usedcar/> } />
      <Route path='/camping-place' element={<CampingPlace/> } />

      


    </Routes>
  <Footer/>
  </BrowserRouter>
    
  </React.StrictMode>
);

