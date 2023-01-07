import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import useToken from '../../Hooks/UseToken';
import SocialLogin from '../Share/SocialLogin';
import login from '../../image/login.png'
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user1, loading, error] = useSignInWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);
    const [sendPasswordResetEmail, sending1, error1] = useSendPasswordResetEmail(
        auth
    );
    const [token] = useToken(user1)

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.path || '/'

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
            .then(() => {
                swal("Good job!😉", "login success!", "success");
            })
    }

    const handleResetPass = async () => {
        await sendPasswordResetEmail(email);
        toast('Sent email');

    }

    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <Container className='mt-2 login-page'>
            <div>
                <Row>
                    <Col md={6}>
                        <div>
                            <h5 className='login-text'>LOGIN</h5>
                            <form onSubmit={handleLogin}>
                                <input onBlur={handleEmail} type="email" name="" id="" placeholder='Email' required /> <br />
                                <input onBlur={handlePassword} type="password" name="" id="" placeholder='Password' required /><br />
                                <div className='d-flex justify-content-center'>
                                    <input className='login-btn' type="submit" value="LOGIN" />

                                    <input onClick={handleResetPass} className='reset-btn' type="submit" value="RESET PASS" />
                                </div>
                                <p><Link to='/register' className='text-decoration-none new-user fw-bold' >NEW USER ? PLEASE REGISTER</Link></p>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className='login-image'>
                        <img src={login} alt=""  className='w-75'/>
                        </div>
                    </Col>
                </Row>
                <ToastContainer />
            </div>
        </Container>
    );
};

export default Login;