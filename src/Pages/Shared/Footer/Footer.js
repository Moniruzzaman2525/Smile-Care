import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="text-center m-5">
            <p><small><span style={{ color: '#787C83' }} className='fs-5'>copyright</span> @ {year}</small></p>
        </footer>
    );
};

export default Footer;