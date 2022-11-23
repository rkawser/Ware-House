import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <Container className='mt-2 login-page'>
            <div>
                <Row>
                    <Col md={6}>
                        <div>
                            <form action="">
                                <input type="email" name="" id="" placeholder='Email' required /> <br />
                                <input type="password" name="" id="" placeholder='Password' required /><br />
                                <div className='d-flex justify-content-center'>
                                    <input className='login-btn' type="submit" value="LOGIN" />
                                    <input className='reset-btn' type="submit" value="RESET PASS" />
                                </div>
                                <p><Link to='/register' className='text-decoration-none new-user fw-bold' >NEW USER ? PLEASE REGISTER</Link></p>
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

export default Login;