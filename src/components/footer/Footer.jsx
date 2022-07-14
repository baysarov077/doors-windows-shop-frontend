import React from 'react';
import './footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import logo from '../header/img/logo.png'

const Footer = () => {
  return (
    <footer>
      <div className='social'>
      <img className='footer-logo' width={'100%'} src={logo} alt="" />  
        <div className='social-list-block'>
          <div>
            <p className='social-title'>Наши социальные сети:</p>
          </div>
          <div className='social-list'>
            <InstagramIcon className='list-item' fontSize='large' />
            <WhatsAppIcon className='list-item' fontSize='large' />
            <YouTubeIcon className='list-item' fontSize='large' />
            <TelegramIcon className='list-item' fontSize='large' />
          </div>
        </div>      
        <div className='street'>
          <div>Адрес:</div>
          <div>ул Г.Трошева 95</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;