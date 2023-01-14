import { Typography } from '@mui/material';
import Box from '@mui/material/Box/Box';
import Grid from '@mui/material/Grid/Grid';
import React from 'react';
import FoodItem from './FoodItem';
import Navabar from './Navabar';
import Button from '@mui/material/Button';

const HomeO = () => {
  return (
    <>
      <Navabar />
      <Typography variant='h3' my={3} textAlign='center'>Let's Cook</Typography>
      <Box p={2} sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: 'repeat(1,1fr)', sm: 'repeat(3, 1fr)' }, }}>
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
      </Box>
      <Box m={1} p={1} sx={{display:'flex', justifyContent:'center'}}>
      <Button variant="contained">Post this Menu</Button>
      </Box>
    </>
  )
}

export default HomeO