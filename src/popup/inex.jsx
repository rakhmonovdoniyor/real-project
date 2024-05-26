import React from 'react';
import Popup from 'reactjs-popup';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Popimg } from '../homepage/style';


export const PopUp = () => (
    
  <Popup
    trigger={<Popimg className="button"> <PlayCircleOutlineIcon sx={{backgroundColor: 'transparent', width: 50, height: 50 , color: 'white' , cursor: 'pointer'}}/>  </Popimg>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Modal Title </div>
        <div className="content">
        <iframe width="790" height="360" src="https://www.youtube.com/embed/NcCOnIRJ328?si=BGMOVDGz75jkCD79" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="actions">
         
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
);

export default PopUp;