import React from 'react';
import teat1 from '../../../images/treat1.png'
import teat2 from '../../../images/treat.png'
import teat3 from '../../../images/trea-46.png'

const ExtraPart = () => {
    return (
        <div className='row ms-1 me-1 mb-5 '>
            <div className='col-sm-12 p-5 col-md-6 col-lg-4 bg-success d-flex justify-content-between'>
                <div className='d-flex me-5 w-75 h-100 justify-content-center align-items-center'>
                    <img className='w-50' src={teat1} alt="" />
                </div>
                <div>
                    <h2 className='fs-3'>Tooth Protection</h2>
                    <p>There are only 2 dental specialties that only focus on dental esthetics: Prosthodontics and Orthodontics</p>
                </div>
            </div>
            <div className='col-sm-12 p-5 col-md-6 col-lg-4 bg-primary d-flex justify-content-between'>
                <div className='d-flex w-75 h-100 justify-content-center align-items-center'>
                    <img className='w-50' src={teat2} alt="" />
                </div>
                <div>
                    <h2>Teeth Whitening</h2>
                    <p>Bleaching methods use carbamide peroxide which reacts with water to form hydrogen peroxide lorem</p>
                </div>
            </div>
            <div className='col-sm-12 p-5 col-md-6 col-lg-4 bg-info d-flex justify-content-between'>
                <div className='d-flex w-75 h-100 justify-content-center align-items-center'>
                    <img className='w-50 rounded' src={teat3} alt="" />
                </div>
                <div>
                    <h2>Cosmetic Dentistry</h2>
                    <p>There are only 2 dental specialties that only focus on dental esthetics: Prosthodontics and Orthodontics</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraPart;