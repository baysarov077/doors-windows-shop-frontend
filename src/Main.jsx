import React from 'react';
import Cards from './components/card/Cards';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import YandMap from './components/YandMap';
import icon from './img/58.png'
import './main.css'

const Main = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="main-block">
          <div>
            <h1>Пластиковые <span className="green-color">окна</span> и <span className="green-color">двери</span> по выгодным ценам</h1>
            <p className="main-text">Замер, доставка и установка по всей Чечне и Северному Кавказу!</p>
            <button className="buy-now-btn">Купить сейчас</button>
          </div>
          <div className="main-img-block">
            <img width="100%" src={icon} alt="error" />
          </div>
        </div>
        <Slider />
        <Cards />
        <YandMap />
        <button className='subm'>Связаться с нами</button>
      </div>
      <Footer />
    </div>
  );
};

export default Main;