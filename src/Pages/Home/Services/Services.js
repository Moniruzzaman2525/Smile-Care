import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services'>
            <h2 style={{ color: '#30383B' }} className='text-center mt-5 fs-1'>My Clinic <span className='text-info'>Services</span></h2>
            <p style={{ color: '#787C83' }} className='text-center fs-4 mb-5'>Services provide</p>
            <div className="row container mx-auto">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;