import React from 'react';
import ImgCar1 from '../2.jpg';
import ImgCar2 from '../carrousel6.jpg'
import ImgCar3 from '../carrousel3.png'

import {Carousel} from 'react-bootstrap';

const Carrousel = () => (
    <Carousel>
        <Carousel.Item>
            <img className="d-block w-100" style={{height: '500px'}} src={ImgCar1} alt="First slide"/>
            <Carousel.Caption>
                <h3>Compras seguras</h3>
                <p>Tus compras son seguras y rápidas.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" style={{height: '600px'}} src={ImgCar2} alt="First slide"/>
            <Carousel.Caption>
                <h3>Compras seguras</h3>
                <p>Tus compras son seguras y rápidas.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" style={{height: '600px'}} src={ImgCar3} alt="First slide"/>
            <Carousel.Caption>
                <h3>Compras seguras</h3>
                <p>Tus compras son seguras y rápidas.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);

export default Carrousel;