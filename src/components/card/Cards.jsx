import React from 'react';
import Card from './Card';
import icon from './img/arka.jpg'
import icon2 from './img/big-door.jpg'
import icon3 from './img/dom.jpg'
import icon4 from './img/join.jpg'
import './card.css'

const Cards = () => {
  return (
    <>
      <h2 className='cards-heading'>Наш ассортимент</h2>
      <div className="cards">
      <Card name={'Входные двери'} 
        img={icon4} 
        oldPrice={'от 15 300 р/м'} 
        price={'от 13 280 р/м'} 
        text={'Удобная возможность потратить меньше, получить больше - прочности, долговесности, практичности'}
      />
      <Card name={'Балконные двери'} 
        img={icon3} 
        oldPrice={'от 15 300 р/м'} 
        price={'от 13 280 р/м'} 
        text={'Удобная возможность потратить меньше, получить больше - прочности, долговесности, практичности'}
      />
      <Card name={'Панорамные двери'} 
        img={icon2} 
        oldPrice={'от 15 300 р/м'} 
        price={'от 13 280 р/м'} 
        text={'Удобная возможность потратить меньше, получить больше - прочности, долговесности, практичности'}
      />
      <Card name={'Пластиковые арки'} 
        img={icon} 
        oldPrice={'от 15 300 р/м'} 
        price={'от 13 280 р/м'} 
        text={'Удобная возможность потратить меньше, получить больше - прочности, долговесности, практичности'}
      />
    </div>
    </>
  );
};

export default Cards;