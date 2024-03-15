// Datav.jsx
import React from 'react';
import { useIsAuthenticated } from '@azure/msal-react';
import SignOutButton from './SignOutButton'; // Asegura que la ruta sea correcta
import { useNavigate } from 'react-router-dom';

const Datav = () => {
    const isAuthenticated = useIsAuthenticated();
    const navigate = useNavigate();

    return (
        <div className="datav-container">
            {isAuthenticated ? (
                <>
                    <span>Hola, ¿cómo estás?</span>
                    {/* Contenido adicional de Datav aquí */}
                    <SignOutButton />
                </>
            ) : (
                navigate("/")
            )}
        </div>
    );
};

export default Datav;
