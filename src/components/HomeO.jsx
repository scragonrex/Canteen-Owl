import { Alert, Snackbar, Typography } from '@mui/material';
import Box from '@mui/material/Box/Box';
import React, { useContext } from 'react';
import FoodItem from './FoodItem';
import Navabar from './Navabar';
import Button from '@mui/material/Button';
import FoodItemContext from './context/FoodItemContext';
import { UserAuth } from './context/AuthContext';

const HomeO = () => {
  const context = useContext(FoodItemContext);
  const items = context.allFoodItem;
  const addMenu = context.addMenu;
  const userContext = UserAuth();
  console.log(userContext);
  // const show =context.showMenu;

  // console.log("menu for student",menusf);
  const handleClick = (e)=>{
    addMenu();
    handleClickAlert();
  }
  
  const [open, setOpen] = React.useState(false);

  const handleClickAlert = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Navabar />
      <Typography variant='h3' my={3} textAlign='center'>Let's Cook</Typography>
      <Box p={2} sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: 'repeat(1,1fr)', sm: 'repeat(3, 1fr)' }, }}>
        {
          items.map((item)=>{
            return <FoodItem key={item.user} user={item.user} name={item.name} price={item.price} category={item.category} image={item.image} />
          })
        }
      </Box>
      <Box m={1} p={1} sx={{display:'flex', justifyContent:'center'}}>
      <Button variant="contained" onClick={handleClick}>Post this Menu</Button>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Added menu sucessfully
        </Alert>
      </Snackbar>
    </>
  )
}

export default HomeO;