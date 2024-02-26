//import React from 'react';
import React, { useEffect } from 'react';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { loginRequest } from './authConfig'; 
import { useNavigate } from 'react-router-dom';

const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType) => {
        if (loginType === 'popup') {
            instance.loginPopup(loginRequest).catch(e => {
                console.error(e);
            });
        } else if (loginType === 'redirect') {
            instance.loginRedirect(loginRequest).catch(e => {
                console.error(e);
            });
        }
    };

    return <button onClick={() => handleLogin('popup')}>Iniciar Sesión</button>;
};

const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = () => {
        instance.logoutPopup().catch(e => {
            console.error(e);
        });
    };

    return <button onClick={handleLogout}>Cerrar Sesión</button>;
};

const AuthenticationStatus = () => {
    const { instance } = useMsal();
    const isAuthenticated = useIsAuthenticated();
    const navigate = useNavigate();
    
    useEffect(() => {
        instance.addEventCallback((event) => {
            if (event.eventType === InteractionStatus.LoginSuccess && isAuthenticated) {
                console.log("logueado");
                navigate("/Datav");
            }
        });
    }, [isAuthenticated, navigate, instance]);
    return (
        <div>
            {isAuthenticated ? <SignOutButton /> : <SignInButton />}
        </div>
    );
};

export default AuthenticationStatus;
