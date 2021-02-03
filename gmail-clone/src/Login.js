import { Button } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './firebase'
import './Login.css'
function Login() {
    
    const dispatch = useDispatch();

        const signIn =() =>{
            auth.signInWithPopup(provider).then(({user}) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                }))
            }).catch((error) => alert(error.message));
        }
    
 
    return (
        <div className = "login_sign">
            <Button onClick = {signIn} className = "meine_button">Login</Button>
        </div>
    )
}

export default Login
