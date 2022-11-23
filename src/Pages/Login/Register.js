import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className='mt-2 login-page'>
            <div>
                <Row>
                    <Col md={6}>
                        <div>
                            <form action="">
                                <input type="text" name="" id="" placeholder='Name' required />
                                <input type="email" name="" id="" placeholder='Email' required /> <br />
                                <input type="password" name="" id="" placeholder='Password' required /><br />
                                <input type="password" name="" id="" placeholder='Confirm-Password' required /><br />
                                    <input className='Register-btn' type="submit" value="REGISTER" />
                              
                                <p><Link to='/login' className='text-decoration-none new-user fw-bold' >ALREADY USER? PLEASE LOGIN</Link></p>
                            </form>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className='login-image'>

                        </div>
                    </Col>
                </Row>
            </div>
        </Container>

    );
};

export default Register;