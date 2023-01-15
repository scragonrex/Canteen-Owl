import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
const Navabar = () => {
  const Item=styled(Link)(({theme})=>
  (
    {
      textDecoration:'none',
      fontSize:"1.2rem",
      color:'white',
      padding:'6px',
      transition:'0.4s',
      borderRadius:"5px",
       "&:hover": {
             backgroundColor:"white",
         borderRadius:"5px",
         color:'#0d6efd',
         cursor: "pointer",
        //  fontWeight:'bold'
         },
  }
  ));
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         Canteen Owl
        </Typography>
        <Box ml={1} sx={{display:'flex', alignItems:'center'}}><Item sx={{color:'white'}}/><Item to='/HomeSF'>HomeSF</Item></Box>
        <Box ml={1} sx={{display:'flex', alignItems:'center'}}><Item sx={{color:'white'}}/><Item to='/HomeO'>HomeO</Item></Box>
        <Avatar sx={{ bgcolor: 'purple' }}>N</Avatar>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navabar