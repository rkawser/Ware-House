import React from 'react';
import { Container } from 'react-bootstrap';
import './SocialLogin.css';
import facebook from '../../image/facebook.png';
import google from '../../image/google.png';
import { useAuthState, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/UseToken';
import swal from 'sweetalert';
const SocialLogin = () => {
  
    const [signInWithGoogle, guser, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.path || '/';
    const [token] =useToken(guser || user1);
    
    if(token){
        navigate(from, { replace: true });
    }
    return (
        <Container>
            <div className='d-block d-flex justify-content-center align-items-center'>
                <div className=' text-primary w-50'> <hr /></div>
                <span className='fw-bold'>or</span>
                <div className='text-primary w-50'><hr /></div>
            </div>

            <div className='social-btn d-flex justify-content-center my-3'>
                <button onClick={() => signInWithGoogle()
                                    .then(()=>{
                                        swal("Good job!😉", "login success!", "success");
                                    })
                } className='sign-google btn mx-2 fw-bold text-light'><img src={google} height={30} alt="" /> SignIn Google</button>

                <button onClick={() => signInWithFacebook()
                .then(()=>{
                    swal("Good job!😉", "login success!", "success");
                })
                } className='sign-facebook btn fw-bold text-light'><img src={facebook} height={30} alt="" /> SignIn facebook</button>
            </div>
        </Container>
    );
};

export default SocialLogin;