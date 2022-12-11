import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { IoIosArrowForward } from "react-icons/io";
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {

    return (
        <div>
            <div className='about-bg d-flex justify-content-center align-items-center'>
                <div className='bg-text'>
                    <Link to='/home'>Home</Link>
                    <IoIosArrowForward />
                    <Link to='/about'>About</Link>
                </div>
            </div>

            <Container className='mt-5'>
                <Row className='about-text'>
                    <Col md={6}>
                        <div>
                            <h2>What is warehousing?</h2>
                            <p></p>
                            <h6>
                                Warehousing is the process of storing physical and Online goods or inventory in a warehouse or storage facility before they are sold or distributed. Warehouses safely and securely store and protect products in an organized way, making it easy to track an item’s location, when the items arrived, how long the item has been there, and the quantity on hand.

                                For a small or new business, warehousing their inventory may be done from home until they outgrow the space. At that point, the business will have to rent storage space, lease a warehouse, or outsource logistics to a third-party and store inventory in their warehousing facilities.

                                In ecommerce warehousing, products are stored until an order is placed online, which triggers  the order to be  shipped directly to the consumer from the warehouse facility. In retail stores, inventory may be temporarily stored in a warehouse before it’s shipped to a brick and mortar store.
                            </h6>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className='about-image'>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;