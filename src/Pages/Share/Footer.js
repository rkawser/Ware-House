import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import foterlogo from '../../image/logo.png';
import suppport from '../../image/footerimage/support.png';
import addresh from '../../image/footerimage/addresh.png';
import foterLogo from '../../image/footerimage/foter-logo.png'
import { FaFacebookF, FaTwitter, FaPinterest, FaVimeo, FaInstagram } from "react-icons/fa";
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
                                <div className='d-flex mt-3 justify-content-around'>
                                    <p className='fs-2 f-social '><FaFacebookF /></p>
                                    <p className='fs-2 f-social'><FaTwitter /></p>
                                    <p className='fs-2 f-social'><FaPinterest /></p>
                                    <p className='fs-2 f-social'><FaVimeo /></p>
                                    <p className='fs-2 f-social'><FaInstagram /></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <hr  className='text-light'/>
                <Container>
                    <div className='d-flex justify-content-between'>
                        <p className='text-light'>Copyright © 2022 Raihan Kawser. All Rights Reserved.</p>
                        <img src={foterLogo} height={30} alt="" />
                    </div>
                </Container>
            </div>
           
        </footer>
    );
};

export default Footer;