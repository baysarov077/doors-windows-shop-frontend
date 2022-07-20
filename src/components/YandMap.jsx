import React from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";
import './yand.css'

const YandMap = () => {
  return (
    <div>
      <a href="dasd" name="map"><div></div></a>
      <h2 className='yand-heading'>Наше местоположение</h2>
      <YMaps >
        <div className="map">
          <Map 
          width={'100%'}
          height={'500px'}
          defaultState={{ center: [43.139920, 45.905241], zoom: 15}}>
            <Placemark geometry={[43.139920, 45.905241]}/>
          </Map>
        </div>
      </YMaps>
    </div>
  );
};

export default YandMap;