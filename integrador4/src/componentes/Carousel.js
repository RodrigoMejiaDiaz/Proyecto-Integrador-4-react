import React from 'react';
import ImgCar1 from '../carrousel1.png';

import {Carousel} from 'react-bootstrap';

const Carrousel = () => (
    <Carousel>
        <Carousel.Item>
            <img className="d-block w-100" src={ImgCar1} alt="First slide"/>
            <Carousel.Caption>
                <h3>Compras seguras</h3>
                <p>Tus compras son seguras y rápidas.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);

export default Carrousel;