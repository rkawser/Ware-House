import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from './Firebase/Firebase.init';
import Verified from './Pages/Login/Verified';
import Loading from './Pages/Share/Loading';

const RequreAuth = ({children}) => {
    const [user,loading] = useAuthState(auth)
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }
    
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
       }
       

    if (user.providerData[0]?.providerId =='password' && !user?.emailVerified) {
        return <Verified></Verified>
    }

   
    return children;
};

export default RequreAuth;