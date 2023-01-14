import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
const Navabar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         Canteen Owl
        </Typography>
        <Avatar sx={{ bgcolor: 'purple' }}>N</Avatar>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navabar