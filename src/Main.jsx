import React, { useState } from 'react';
import Cards from './components/card/Cards';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import YandMap from './components/YandMap';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TelegramIcon from '@mui/icons-material/Telegram';
import icon from './img/58.png'
import './main.css'

const Main = () => {

  const [open, setOpen] = useState(false)
  const [modal, setModal] = useState(false)

  return (
    <>
    {
      modal &&
        <div className='modal-social'>
          <div onClick={() => setModal(false)}><HighlightOffIcon className='close-btn' fontSize='medium' /></div>
          <h2 className='modal-h2'>Наши контакты: </h2>
          <div className='social-list'>
            <a  className='modal-links' href="https://instargram.com"><InstagramIcon className='list-item' fontSize='large' /></a>
            <a  className='modal-links' href="https://skobelkin.ru/whatsapp/79999999999"><WhatsAppIcon className='list-item' fontSize='large' /></a>
            <a  className='modal-links' href="https://telegram.me/baysarovv"><TelegramIcon className='list-item' fontSize='large' /></a>
          </div>
          <div style={{
            width: '90%',
            display: 'block',
            margin: 'auto',
            marginTop: '2rem',
            color: "#fff"
          }}>
            <div style={{
              textAlign: 'center'
            }}>Номер телефона</div>
            <div style={{
              textAlign: 'center'
            }}>8-800-555-35-35</div>
          </div>
        </div>
    }
    <div>
      <Header />
      <div className="container">
        <div className="main-block">
          <div>
            <h1>Пластиковые <span className="green-color">окна</span> и <span className="green-color">двери</span> по выгодным ценам</h1>
            <p className="main-text">Замер, доставка и установка по всей Чечне и Северному Кавказу!</p>
            <button onClick={() => setModal(!modal)} className="buy-now-btn">Связаться с нами</button>
          </div>
          <div className="main-img-block">
            <img width="100%" src={icon} alt="error" />
          </div>
        </div>
        <Slider />
        <Cards />
        <YandMap />
        <button onClick={() => setOpen(!open)} className='subm'>Связаться с нами</button>
      </div>
      {
        open &&
        <div className='call-modal'>
          <div onClick={() => setOpen(false)}><HighlightOffIcon className='close-btn-second' fontSize='medium' /></div>
          <div>
            <h3 className='call-h3'>Звоните в рабочее время</h3>
          </div>
          <div>
            <span className='call-number'>8-800-555-35-35</span>
          </div>
        </div>
      }
      <Footer />
    </div>
    </>
  );
};

export default Main;