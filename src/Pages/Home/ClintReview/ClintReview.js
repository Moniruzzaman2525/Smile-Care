import React from 'react';
import about from '../../../images/about.jpg'

const ClintReview = () => {
    return (
        <div className='container mx-auto mt-4'>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <img className='w-75 ms-4' src={about} alt="" />
                </div>
                <div className='col-sm-12 mt-5 col-md-6 col-lg-6'>
                    <h2 className='mb-5 fw-bold'>About My Dentist <span className='text-success'>Clinic</span></h2>
                    <p style={{ color: '#787C83' }} className='fs-5'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                        Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
                </div>
            </div>
        </div>
    );
};

export default ClintReview;