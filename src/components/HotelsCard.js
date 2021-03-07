import React from 'react';
import {hotels} from "../constants/contents";


function HotelsCard() {
  return hotels.map(item => (
    <>
      <div className='hotels'>
      <div className = 'imgHotels'>
        <img src = {item.imageUrl}></img>
      </div>
      <div className="hotelsCard">
        <h3 className="hotelsName">{item.name}</h3>
        <p>{item.city}</p>
      </div>
    </div>
      </>
  ));
}

export default HotelsCard;




