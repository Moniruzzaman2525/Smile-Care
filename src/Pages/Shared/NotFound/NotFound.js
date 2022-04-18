import React from 'react';
import notfound from '../../../images/404.png'

const NotFound = () => {
    return (
        <div className='container mx-auto'>
            <div className='row'>
                <div>
                    <h2 className='fs-2'>ERROR 404</h2>
                    <h2 className='fs-2'>NOT FOUND</h2></div>
                <div>
                    <img className='w-75' src={notfound} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;