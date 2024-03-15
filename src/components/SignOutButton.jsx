import { useMsal} from '@azure/msal-react';

const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = () => {
        instance.logoutPopup().catch(e => {
            console.error(e);
        });
    };

    return <button onClick={handleLogout}>Cerrar Sesión</button>;
};

export default SignOutButton;