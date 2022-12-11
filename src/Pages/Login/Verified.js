import { async } from '@firebase/util';
import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';


const Verified = () => {
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

  const handverifiedemail = async () => {
    await sendEmailVerification();
    alert('Sent email')
  }

  return (
    <div>
      <h2>your gmail account not verified,check your gmail</h2>
      <h3>please verified your account</h3>
      <button onClick={handverifiedemail} className='btn btn-primary mx-2'>send email</button>
      or

      <Link to='/register'>
        <button className='btn btn-primary mx-2'>create your account</button>
      </Link>
    </div>
  );
};

export default Verified;