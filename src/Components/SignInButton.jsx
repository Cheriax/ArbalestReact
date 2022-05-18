import React from 'react';
import Button from '@mui/material/Button'

function handleLogin(instance) {
    instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
    });
}


export default function SignInButton () {
    const { instance } = useMsal();
    return(
        <Button onClick={handleLogin(instance)}>
            Sign In
        </Button>
    )
}