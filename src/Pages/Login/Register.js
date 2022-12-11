import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Share/SocialLogin';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from "react-firebase-hooks/auth"
import auth from '../../Firebase/Firebase.init';
import Loading from '../Share/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert'
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [name, setName] = useState('')
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, uperror] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);
    const navigate = useNavigate();

    // if(loading){
    //  return <Loading></Loading>
    // }

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleConfirm = e => {
        setConfirm(e.target.value)
    }
    const handleName = e => {
        setName(e.target.value)
    }

    const registerSubmit = (e) => {
        e.preventDefault()
        if (confirm !== password) {
            swal("your password not match!", "Try matching again!", "warning")
            return;
        }

        createUserWithEmailAndPassword(email, password)
            .then(() => {
                updateProfile({ displayName: name })
                sendEmailVerification()
                toast("sent verified mail")

            })

    }
    return (
        <Container className='mt-2 login-page'>
            <div>
                <Row>
                    <Col md={6}>
                        <div>
                            <h5 className='login-text'>REGISTER</h5>
                            <form onSubmit={registerSubmit}>
                                <input onBlur={handleName} type="text" name="" id="" placeholder='Name' required />
                                <input onBlur={handleEmail} type="email" name="" id="" placeholder='Email' required /> <br />
                                <input onBlur={handlePassword} type="password" name="" id="" placeholder='Password' required /><br />
                                <input onBlur={handleConfirm} type="password" name="" id="" placeholder='Confirm-Password' required /><br />
                                <input className='Register-btn' type="submit" value="REGISTER" />

                                <p><Link to='/login' className='text-decoration-none new-user fw-bold' >ALREADY USER? PLEASE LOGIN</Link></p>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className='register-image'>

                        </div>
                    </Col>
                </Row>
                <ToastContainer />
            </div>
        </Container>

    );
};

export default Register;