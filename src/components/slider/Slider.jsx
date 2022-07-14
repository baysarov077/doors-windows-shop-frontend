import React from 'react';
import slider1 from './img/slider1.jpeg'
import slider2 from './img/slider2.jpeg'
import slider3 from './img/slider3.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './slider.css'

const Slider = () => {

  return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 slide-img"
      src={slider1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Надежно и качественно!</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slide-img"
      src={slider2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Быстро и недорого!</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{
        maxHeight: '650px'
      }}
      className="d-block w-100 slide-img"
      src={slider3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Современно и стильно!</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
};

export default Slider;