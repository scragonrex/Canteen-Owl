import { Typography } from '@mui/material';
import Box from '@mui/material/Box/Box';
import React, { useContext } from 'react';
import FoodItem from './FoodItem';
import Navabar from './Navabar';
import FoodItemContext from './context/FoodItemContext';
import { UserAuth } from './context/AuthContext';
import Button from '@mui/material/Button';

const HomeSF = () => {
  const usersf = UserAuth().user;
  console.log("usersf_id",usersf.email);
  const context = useContext(FoodItemContext);
  const {menusf,menu,showsf} =context;
  // console.log("menu for student1",menusf);
  // console.log("menu for student1",menu);
  const items= menusf;
  return (
    <>
    <Navabar />
    <Typography variant='h3' my={3} textAlign='center'>Let's Eat</Typography>
    <Box p={2} sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: 'repeat(1,1fr)', sm: 'repeat(3, 1fr)' }, }}>
      {
        items.map((item)=>{
          return <FoodItem key={item.user} user={usersf.email} name={item.name} price={item.price} category={item.category} image={item.image} />
        })
      }
    </Box>
<Box m={1} p={1} sx={{display:'flex', justifyContent:'center'}}>
      {items.length == 0 ? <Typography variant='h4'>Menu not decided by the owner. Go to HomeSF section</Typography> : <Button variant="contained" onClick={showsf}>Buy</Button>}
      </Box>
  </>
  )
}

export default HomeSF;
