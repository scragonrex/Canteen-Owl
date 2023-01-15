import { Google } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React, { useContext } from 'react'
import FoodItemContext from './context/FoodItemContext';

const Login = () => {
    return (
        <Box sx={{ display: 'flex',height:'100vh', alignItems: 'center', justifyContent: 'center' }}>
            <Box border={1} sx={{ display: 'flex', height:'50vh', width:'30%', alignItems: 'center', justifyContent: 'center'}}>
                <Button variant="outlined" startIcon={<Google />}>
                    Sign in
                </Button>
            </Box>
        </Box>

    )
}

export default Login    