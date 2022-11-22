import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import foterlogo from '../../image/logo.png';
import suppport from '../../image/footerimage/support.png';
import addresh from '../../image/footerimage/addresh.png';
const Footer = () => {
    return (
        <footer>
            <div className='footer-bg'>
                <Container>
                    <Row>
                        <Col>
                            <div className='part-one'>
                                <img src={foterlogo} className='mb-4' alt="" />
                                <div className='d-flex align-items-center justify-content-around'>
                                    <img src={suppport} height={50} className='img-fluid' alt="" />
                                    <div className='support-text mx-3'>
                                        <p>Call Customer Services,We Support 24/7:</p>
                                        <p>84-0123-456-789</p>
                                    </div>
                                </div>

                                <div className='d-flex align-items-center my-3 '>
                                    <img src={addresh} height={50} className='img-fluid px-2' alt="" />
                                    <div className='support-text mx-3'>
                                        <p>Address:</p>
                                        <p>PO Box 1622 Vissaosang Street West</p>
                                    </div>
                                </div>


                            </div>
                        </Col>
                        <Col>
                            <div className='part-two'>
                                <h5 className='mb-4'>CUSTOMER SERVICE</h5>
                                <div>
                                    <p>Contact us</p>
                                    <p>Help and advice</p>
                                    <p>Shipping & Returns</p>
                                    <p>Terms and conditions</p>
                                    <p>Refund Policy</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className='part-three'>
                                <h5>NEWSLETTER</h5>
                                <div>
                                    <input type="text" />
                                    <button className='f-btn'>SUBSCRIBE</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;