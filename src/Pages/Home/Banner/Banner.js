import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner-1.png'
import banner2 from '../../../images/banner-2.png'
import banner3 from '../../../images/banner-3.png';
// import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div style={{ bottom: '100px', right: '500px', color: '#333f48' }} className='position-absolute'>
                        <h3 className='fs-4'>WELCOME</h3>
                        <h1 className='fs-2'>THE BEST IN MODERN DENTISTRY.</h1>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div style={{ bottom: '100px', color: '#333f48' }} className='position-absolute'>
                        <h3 className='fs-6'>ONLY ONE KIND OF TREATMENT</h3>
                        <h2 className='fs-2'>YOUR NEW SMILE</h2>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <div style={{ bottom: '100px', color: '#333f48' }} className='position-absolute'>
                        <h3 className='fs-4'>WELCOME</h3>
                        <h2 className='fs-2'>CARING FOR YOU & YOU SMILE.</h2>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;