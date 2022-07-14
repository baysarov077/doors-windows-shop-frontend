import React from 'react';
import Card from './Card';
import icon from '../slider/img/slider1.jpeg'
import './card.css'

const Cards = () => {
  return (
    <>
      <h2 className='cards-heading'>Наш ассортимент</h2>
      <div className="cards">
      <Card name={'Входные двери'} 
        img={icon} oldPrice={'от 15 300 р/м'} 
        price={'от 13 280 р/м'} 
        text={'Удобная возможность потратить меньше, получить больше - прочности, долговесности, практичности'}
      />
      <Card name={'Балконные двери'} 
        img={icon} oldPrice={'от 15 300 р/м'} 
        price={'от 13 280 р/м'} 
        text={'Удобная возможность потратить меньше, получить больше - прочности, долговесности, практичности'}
      />
      <Card name={'Панорамные двери'} 
        img={icon} oldPrice={'от 15 300 р/м'} 
        price={'от 13 280 р/м'} 
        text={'Удобная возможность потратить меньше, получить больше - прочности, долговесности, практичности'}
      />
      <Card name={'Раздвижные двери'} 
        img={icon} oldPrice={'от 15 300 р/м'} 
        price={'от 13 280 р/м'} 
        text={'Удобная возможность потратить меньше, получить больше - прочности, долговесности, практичности'}
      />
    </div>
    </>
  );
};

export default Cards;