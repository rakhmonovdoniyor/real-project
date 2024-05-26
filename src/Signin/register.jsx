import React from 'react';
import Popup from 'reactjs-popup';
import { Input1, Inputwrap, REgh1, RegWrapper, BtnReg } from './style';
import { Checkbox } from './style';
// import { Input } from '@mui/material';

export const Register = () => (
  <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        
        <div className="content">
          
          <RegWrapper>
            <REgh1>
              <h1>Registrate</h1>
            </REgh1>


            <Inputwrap>

            
            <div>
              <h3>Email</h3> <br /> 
              <Input1 type="email" placeholder='Your Email'/>  
            </div>

            <div>
              <h3>Password</h3><br />
              <Input1 type="password" placeholder='Your Password' />
            </div>

            <div>
              <h3>Repeat Password</h3> <br />
              <Input1 type="password"placeholder='Repeat Password' />
            </div>

            <Checkbox>
              <input type="checkbox" />
              <h3>Keep me logged in</h3>
            </Checkbox>

            <BtnReg>REGISTRATE</BtnReg>

            </Inputwrap>

          </RegWrapper>
          
        </div>
        <div className="actions">
          
          <BtnReg
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
           Close
          </BtnReg>
        </div>
      </div>
    )}
  </Popup>
);