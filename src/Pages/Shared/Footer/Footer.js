import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="text-center p-4 text-light mt-5 bg-info fw-bold">
            <p><small>copyright @ {year}
                <b> Smile-Care</b> All Rights Reserved</small></p>

        </footer >
    );
};

export default Footer;