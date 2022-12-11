import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import UseProducts from '../../Hooks/UseProducts';
import Loading from '../Share/Loading';
import Product from './Product';
import './Products.css';
const Products = () => {
    const [products] = UseProducts()
    return (
        <Container className='my-5 product-section'>
            <Row>
                <Col md={3}>
                    <div className='product-text'>
                        <h5 className='brand-name'>SMART PHONE</h5>
                        <Row className='g-3 mt-5 d-flex justify-content-center'>

                            <Col md={6} sm={4}>
                                <div className='brand-1'></div>
                            </Col>
                            <Col md={6} sm={4}>
                                <div className='brand-2'></div>
                            </Col>
                            <Col md={6} sm={4}>
                                <div className='brand-3'></div>
                            </Col>
                            <Col md={6} >
                                <div className='brand-4'></div>
                            </Col>
                            <Col md={6} sm={4}>
                                <div className='brand-5'></div>
                            </Col>
                            <Col md={6} sm={4}>
                                <div className='brand-6'></div>
                            </Col>
                            <Col md={6} sm={4}>
                                <div className='brand-1'></div>
                            </Col>
                            <Col md={6} sm={4}>
                                <div className='brand-7'></div>
                            </Col>
                            <Col md={6} sm={4}>
                                <div className='brand-8'></div>
                            </Col>
                            <Col md={6} sm={4}>
                                <div className='brand-9'></div>
                            </Col>
                            <Col md={6} sm={4}>
                                <div className='brand-10'></div>
                            </Col>
                            <Col md={6} sm={4}>
                                <div className='brand-12'></div>
                            </Col>

                        </Row>
                    </div>
                </Col>

                <Col md={9} className='product-text2 mt-5'>
{               products.length > 0  ?
                    (<div id='product' className='row gy-5'>
                        {
                            products.map(service => <Product key={service._id} service={service}></Product>)
                        }
                    </div>)
                    :
                    (<div>
                        <Loading></Loading>
                    </div>)

                     }
                </Col>
            </Row>
        </Container>
    );
};

export default Products;