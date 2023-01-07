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
                                    <div className='bannerImage'>
                                        <div className='banner-text p-5'>
                                            <h4 >From $550</h4>
                                            <h2 className='text-light'>QLED 8K</h2>
                                            <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Numquam, similique fuga! Neque aliquid culpa repudiandae.</p>

                                            <button className='banner-btn'>Buy Now</button>
                                        </div>

                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='bannerImage2'>
                                        <div className='banner-text p-5'>
                                            <h4 >From $550</h4>
                                            <h2 className='text-light'>QLED 8K</h2>
                                            <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Numquam, similique fuga! Neque aliquid culpa repudiandae.</p>

                                            <button className='banner-btn'>Buy Now</button>
                                        </div>

                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='bannerImage3'>
                                        <div className='banner-text p-5'>
                                            <h2 className='text-light'>Vinova SmartPhone</h2>
                                            <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Numquam, similique fuga! Neque aliquid culpa repudiandae.</p>

                                            <button className='banner-btn'>Buy Now</button>
                                        </div>

                                    </div>
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
                        <Col md={6}>
                            <div className='sidebanner1 '>
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