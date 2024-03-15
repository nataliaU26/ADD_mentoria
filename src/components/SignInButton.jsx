import { loginRequest } from '../context/authConfig'; 
import { useMsal} from '@azure/msal-react';

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

    return <button onClick={() => handleLogin('redirect')}>Iniciar Sesión</button>;
};

export default SignInButton;