//import React from 'react';
import React, { useEffect } from 'react';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
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
    const isAuthenticated = useIsAuthenticated();
    const navigate = useNavigate(); 

    useEffect(() => {
        // Si el usuario está autenticado, redirige al dashboard principal
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [isAuthenticated, navigate]);
    return (
        <div>
            {isAuthenticated ? <SignOutButton /> : <SignInButton />}
        </div>
    );
};

export default AuthenticationStatus;
