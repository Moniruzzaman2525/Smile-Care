import React from 'react';
import monir from '../../images/monir.png'

const About = () => {
    return (
        <div className='container mt-5 mb-5 flex-column-reverse flex-md-row d-flex  justify-content-between align-items-center'>
            <div>
                <h1 className='text-center'>My <span className='text-info'>Dream</span></h1>
                <h3 style={{ color: '#787C83' }} className='text-fs-2 m-4'>I am Monir, my dream is to be a good developer.
                    I will continue to work until I fulfill my dream.I'm a programming hero and a student. The programming hero paved the way for me to become a programmer.
                    And my dream is not fulfilled, I will continue my efforts inshallah.</h3>
            </div>
            <div className='border border-2 rounded'>
                <img src={monir} alt="" />
            </div>
        </div>
    );
};

export default About;