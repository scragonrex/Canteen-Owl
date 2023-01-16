import Card from '@mui/material/Card/Card'
import CardActionArea from '@mui/material/CardActionArea/CardActionArea'
import CardMedia from '@mui/material/CardMedia/CardMedia'
import React, { useState, useContext, useEffect } from 'react'
import { Alert, IconButton, Snackbar, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent/CardContent'
import FoodItemContext from './context/FoodItemContext';
import { Add, Remove } from '@mui/icons-material';
import { Box } from '@mui/system';
import { useLocation } from 'react-router-dom';

const FoodItem = (props) => {
  const [quantity, setQuantity] = useState(0);
    let location = useLocation();
    const {user, name, price, category, image} = props;
    const context = useContext(FoodItemContext);
    const {addItems, addFoodsf, removeFoodsf} = context;

    const addFood = ()=>{
      console.log(user);
      if(location.pathname === '/HomeO')
      addItems(user);
    }

    const handleAddFoodsf=()=>{
      setQuantity(quantity+1);
      addFoodsf(user, name, price, category, image);
    }

    const handleRemoveFoodsf=()=>{
      if(quantity>1)
      setQuantity(quantity-1);
      removeFoodsf(user, name, price, category, image);
    }
  
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
  return (<>
    <Card m={2} onClick={addFood}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {name}
          </Typography>
          <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <Typography variant="body2" component='span' color="text.secondary">
            Price : Rs{price}
          </Typography>
          <Typography variant="body2" component='span' color="text.secondary">
            Category : {category}
          </Typography>
          {location.pathname === '/HomeSF' && <Typography variant="body2" component='span' color="text.secondary">
            Quantity : {quantity}
          </Typography>}
          {location.pathname === '/HomeSF' && <IconButton onClick={handleAddFoodsf}><Add/></IconButton>}
          {location.pathname === '/HomeSF' && <IconButton onClick={handleRemoveFoodsf}><Remove/></IconButton>}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  
    </>
  )
}

export default FoodItem