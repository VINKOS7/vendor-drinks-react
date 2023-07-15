import React from 'react';
import { useNavigate } from 'react-router-dom';
import userManager from '../../connection/userManager';

const LoginRedirect = () => {
    const navigate = useNavigate();

    userManager.signinRedirectCallback()
        .then(async () => {
            navigate('/');
        })
        .catch((error: any) => {
            navigate('/admin');
            console.log(error);
            console.log(userManager.signinRedirectCallback);
        });

    return (
        <div className='login-redirect-screen'>
        </div>
    )
};

export default LoginRedirect;
