import React from 'react';
import monir from '../../images/monir.png'

const About = () => {
    return (
        <div className='container d-flex justify-content-between align-items-center'>
            <div>
                <h2 className='text-fs-2'>I am Monir, my dream is to be a good developer.
                    I will continue to work until I fulfill my dream.I'm a programming hero and a student. The programming hero paved the way for me to become a programmer.
                    And my dream is not fulfilled, I will continue my efforts inshallah</h2>
            </div>
            <div className='border border-2'>
                <img src={monir} alt="" />
            </div>
        </div>
    );
};

export default About;