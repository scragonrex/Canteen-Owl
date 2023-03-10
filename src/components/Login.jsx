import React, { useEffect } from 'react'
import { UserAuth } from './context/AuthContext'
import GoogleButton from 'react-google-button'
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
const Login = () => {
    const navigate = useNavigate();
    const {googleSignIn, user} = UserAuth();
    const handleSignIn = async()=>{
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        if(user!=null)
        navigate('/HomeSF')
    },[user])
    return (
        <Box sx={{ display: 'flex',height:'100vh', alignItems: 'center', justifyContent: 'center' }}>
            <Box backgroundColor='white' borderRadius='10px' sx={{ display: 'flex', height:'50vh', width:'30%', alignItems: 'center', justifyContent: 'center',boxShadow: '0px 0px 6px 0px #dee2e8' }}>
            <GoogleButton onClick={handleSignIn}/>
            </Box>
        </Box>

    )
}

export default Login    