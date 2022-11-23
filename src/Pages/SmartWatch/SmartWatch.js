import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './SmartWatch.css';
const SmartWatch = () => {
    return (
        <Container className='watch-section'>
             <h5 className='watch-text'>SMARTWATCH</h5>
            <Row className='mt-5'>
                <Col md={4}>
                <div className='watch1'>
                
                </div>
                </Col>
                <Col md={4}>
                <div className='watch2'>

                </div>
                </Col>
                <Col md={4}>
                <div className='watch3'>

                </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SmartWatch;