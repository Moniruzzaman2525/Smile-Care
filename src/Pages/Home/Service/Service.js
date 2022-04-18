import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, img, description } = service;

    return (
        <div className='g-4 col-sm-12 col-md-6 col-lg-4 h-100 mb-5'>
            <div className="card p-3 mb-5 border-0 hover-effect" style={{ width: '18rem' }}>
                <div style={{ height: '115px', border: '2px solid #34b8c0' }} className='mx-auto rounded-circle d-flex justify-content-center align-items-center w-50 '>
                    <img src={img} className="card-img-top w-50" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{price}</p>
                    <p className="card-text">{description}</p>
                    <CustomLink to='/appointment' className="btn btn-info text-light">Appointment</CustomLink>
                </div>
            </div>
        </div>
    );
};

export default Service;