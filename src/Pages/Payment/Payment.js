import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Payment.css';
const Payment = () => {
    return (
        <div>
            <Row className='flex justify-content-center align-items-center'>
                <Col md={6}>
                    <div>
                        <h2 className='fw-bold'>Payment System Coming <br /> Soon....</h2>
                    </div>
                </Col>

                <Col md={6}>
                    <div className='payment-image'>

                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Payment;