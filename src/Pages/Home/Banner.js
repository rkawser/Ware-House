import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../image/banner/banner1.jpg';
import banner2 from '../../image/banner/banner2.jpg';
import banner3 from '../../image/banner/banner3.jpg';
const Banner = () => {
    return (
        <Container className='mt-2'>
            <Row >
                <Col md={8}>
                    <Row>
                        <Col md={12}>
                            <Carousel fade>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 "
                                        src={banner1}
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block img-fluid h-100"
                                        src={banner2}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 "
                                        src={banner3}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col>
                            <Row>
                                <Col><div className='banner-2'>
                                </div>
                                </Col>
                                <Col>
                                    <div className='banner-3'></div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>

                <Col md={4}>
                    <Row className='g-4'>
                        <Col md={6}><div className='sidebanner1'>
                        </div>
                        </Col>
                        <Col md={6}>
                            <div className='sidebanner2'></div>
                        </Col>



                        <Col md={6}><div className='sidebanner3'>
                        </div>
                        </Col>
                        <Col md={6}>
                            <div className='sidebanner4'></div>
                        </Col>

                     
                            
                        <Col md={6}><div className='sidebanner5'>
                        </div>
                        </Col>
                        <Col md={6}>
                            <div className='sidebanner6'></div>
                        </Col>
                   

                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;