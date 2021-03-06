import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const Appointment = () => {
    // const { checkId } = useParams();
    return (
        <div className='container mx-auto w-50'>
            <h2 className='my-5' fs-3>Fill the form below to book <span className='text-info'>appointment</span></h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Full Name *</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Phone Number *</Form.Label>
                    <Form.Control type="number" placeholder="Enter Your Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email *</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Preffered Date *</Form.Label>
                    <Form.Control type="date" placeholder="dd/mm/yy" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='p-5 fs-5' type="text" placeholder="Enter Your Message" />
                </Form.Group>
                <Link to="/checkout" variant="info" className='btn btn-info text-light' type="submit">
                    Make an Appointment
                </Link>
            </Form>
        </div>
    );
};

export default Appointment;