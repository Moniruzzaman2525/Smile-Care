import React from 'react';
import notfound from '../../../images/4041.jpg'

const NotFound = () => {
    return (
        <div className='container mx-auto'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='ms-5'>
                    <h2 className='fs-2 text-info'>ERROR 404</h2>
                    <h2 className='fs-2 text-info'>NOT FOUND</h2></div>
                <div className='d-flex justify-content-end'>
                    <img className='w-75 ms-5' src={notfound} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;