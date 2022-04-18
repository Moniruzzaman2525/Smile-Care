import React from 'react';
import notfound from '../../../images/404.png'

const NotFound = () => {
    return (
        <div className='container mx-auto'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='ms-5'>
                    <h2 className='fs-2 text-danger'>ERROR 404</h2>
                    <h2 className='fs-2 text-danger'>NOT FOUND</h2></div>
                <div>
                    <img className='w-75 ms-5' src={notfound} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;