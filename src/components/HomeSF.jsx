import { Typography } from '@mui/material';
import Box from '@mui/material/Box/Box';
import React, { useContext } from 'react';
import FoodItem from './FoodItem';
import Navabar from './Navabar';
import FoodItemContext from './context/FoodItemContext';
const HomeSF = () => {
  const context = useContext(FoodItemContext);
  const {menusf,menu} =context;
  console.log("menu for student1",menusf);
  console.log("menu for student1",menu);
  const items= menusf;
  return (
    <>
    <Navabar />
    <Typography variant='h3' my={3} textAlign='center'>Let's Cook</Typography>
    <Box p={2} sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: 'repeat(1,1fr)', sm: 'repeat(3, 1fr)' }, }}>
      {
        items.map((item)=>{
          return <FoodItem key={item.id} id={item.id} name={item.name} price={item.price} category={item.category} image={item.image} />
        })
      }
    </Box>
  </>
  )
}

export default HomeSF;
