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
        <div className='social-list-block'>
          <div>
            <span className='social-title'>Наши социальные сети:</span>
          </div>
          <div className='social-list'>
            <InstagramIcon fontSize='large' />
            <WhatsAppIcon fontSize='large' />
            <YouTubeIcon fontSize='large' />
            <TelegramIcon fontSize='large' />
          </div>
        </div>
            <img className='footer-logo' width={'100%'} src={logo} alt="" />        
        <div className='street'>
          <div>Адрес:</div>
          <div>ул Г.Трошева 95</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;