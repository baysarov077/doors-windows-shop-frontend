import React from 'react';
import './card.css'

const Card = ({img, name, price, oldPrice, text}) => {
  return (
    <div className="card">
       <div className="card-img">
         <img width="100%" height="" src={img} alt="" />
       </div>
       <div className="card-about">
         <h3 className='card-heading'>{name}</h3>
         <div>
           <strike>{oldPrice}</strike>
         </div>
         <span className="price">{price}</span>
         <p className="card-text">{text}</p>
       </div>
    </div>
  );
};

export default Card;