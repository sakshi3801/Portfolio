import React from 'react';
import './my-carousal.style.css';
import Carousel from 'react-bootstrap/Carousel';
import bg1 from '../../assets/img/carousal/slide1.webp';
import bg2 from '../../assets/img/carousal/slide2.webp';
import bg3 from '../../assets/img/carousal/slide3.webp';

const MyCarousal = ()=>{
    return(
        <div id='home'>
            <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
                <Carousel.Item><img className="d-block w-100 carousal-img" src={bg1} alt="Bg 1"/></Carousel.Item>
                <Carousel.Item><img className="d-block w-100 carousal-img" src={bg2} alt="Bg 2"/></Carousel.Item>
                <Carousel.Item><img className="d-block w-100 carousal-img" src={bg3} alt="Bg 3"/></Carousel.Item>
            </Carousel>
        </div>
    )
};

export default MyCarousal;