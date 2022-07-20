import React, { useState } from 'react';
import logo from './img/logo.png'
import './header.css'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

const [open, setOpen] = useState(false)

const navigate = useNavigate()

const handleClickLogo = () => {
  navigate('/')
}

  return (
    <header>
      <div onClick={handleClickLogo} className="logo">
        <img className='logo-img' width="100%" src={logo} alt="error" />
      </div>
      <div className="nav-block">
        <nav>
          <ul className="list">
            <li><Link style={{
              textDecoration: 'none',
              color: 'inherit'
            }} to={'/works'}>Наши работы</Link></li>
            <li onClick={() => setOpen(!open)}>Контакты</li>
            <a style={{ textDecoration: 'none', color: '#fff' }} href='#map'><li>Локация</li></a>
            <li>О нас</li>
          </ul>
        </nav>
      </div>
      {
        open &&
        <div className='contacts-modal'>
          <span className='contact-close' onClick={() => setOpen(!open)}>закрыть</span>
          <div className='contacts-flex'>
            <span className='contact-word'>Контакты:</span>
          <div>
            <h5 className='street-text'>8-963-590-24-07</h5>
            <h5 className='street-text'>8-963-590-68-88</h5>
          </div>
          </div>
          <hr />
          <div className='contacts-flex'>
            <div className="contact-word">Адрес:</div>
            <div>
              <h5 className='street-text'>г. Шали</h5>
              <h5 className='street-text'>Ул. Гвардейская, 11б</h5>
            </div>
          </div>
        </div>
      }
    </header>
  );
};

export default Header;