import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Products.css'
const Products = () => {
    return (
        <Container className='my-5 product-section'>
            <Row>
                <Col md={3}>
                    <div className='product-text'>
                        <h5 className='brand-name'>SMART PHONE</h5>
                        <Row className='g-3 mt-5'>

                            <Col md={6}>
                                <div className='brand-1'></div>
                            </Col>
                            <Col md={6}>
                                <div className='brand-2'></div>
                            </Col>
                            <Col md={6}>
                                <div className='brand-3'></div>
                            </Col>
                            <Col md={6}>
                                <div className='brand-4'></div>
                            </Col>
                            <Col md={6}>
                                <div className='brand-5'></div>
                            </Col>
                            <Col md={6}>
                                <div className='brand-6'></div>
                            </Col>
                            <Col md={6}>
                                <div className='brand-1'></div>
                            </Col>
                            <Col md={6}>
                                <div className='brand-7'></div>
                            </Col>
                            <Col md={6}>
                                <div className='brand-8'></div>
                            </Col>
                            <Col md={6}>
                                <div className='brand-9'></div>
                            </Col>
                            <Col md={6}>
                                <div className='brand-10'></div>
                            </Col>
                            <Col md={6}>
                                <div className='brand-12'></div>
                            </Col>

                        </Row>
                    </div>
                </Col>

                <Col md={9} className='product-text2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odit harum cupiditate ad neque odio voluptatum vel optio? Et, hic fugiat vel numquam quis expedita optio provident iste veritatis tempore ratione dolore quibusdam explicabo. Deleniti blanditiis adipisci vitae, animi repudiandae alias perspiciatis aut sequi nemo praesentium officia asperiores error quod nam, obcaecati, voluptas totam at eos? Ipsa eaque numquam quos saepe iste corrupti aut. Amet placeat dolor reiciendis fuga quo doloremque rerum, beatae temporibus, consectetur officiis deserunt tempora hic odit praesentium nulla ea veniam. Facere totam neque temporibus fugiat? Illum quidem tempore fugit officia dicta in facere consequatur nihil quod.</Col>
            </Row>
        </Container>
    );
};

export default Products;