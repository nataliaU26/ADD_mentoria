//import React from 'react';
import React, { useEffect } from 'react';
import {useIsAuthenticated } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';
import SignInButton from '../components/SignInButton';



const AuthenticationStatus = () => {
    const isAuthenticated = useIsAuthenticated();
    const navigate = useNavigate();
     useEffect(() => {
            if (isAuthenticated) {
                console.log("Autenticado, redirigiendo a /Datav");
                navigate("/Datav");
            }
        }, [isAuthenticated, navigate]);
    
    return (
        <div>
            {!isAuthenticated && <SignInButton />}
        </div>
    );
};

export default AuthenticationStatus;
