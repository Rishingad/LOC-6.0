import React, { useState } from 'react';
import './prizes.css';

function Prizes() {

  return (
    <>
    <div className='title'>
      PRIZES
    </div>
      <div className="prize-1" >

      <div className="additional-animation" ></div>
      <div className='prize-money'>
      ₹50,000
      </div>
      </div>
      <div className="prize-2">
      <div className="additional-animation" >
 
      </div>
      <div className='prize-money'>
      ₹75,000
      </div>
      </div>
      <div className="prize-3">
      <div className="additional-animation" ></div>
      <div className='prize-money'>
      ₹40,000
      </div>
      </div>
    </>
  );
}

export default Prizes;
