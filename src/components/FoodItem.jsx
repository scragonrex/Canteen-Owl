import Card from '@mui/material/Card/Card'
import CardActionArea from '@mui/material/CardActionArea/CardActionArea'
import CardMedia from '@mui/material/CardMedia/CardMedia'
import React, { useContext } from 'react'
import { Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent/CardContent'
import FoodItemContext from './context/FoodItemContext';

const FoodItem = (props) => {
    const {id, name, price, category, image} = props;
    const context = useContext(FoodItemContext);
    const {addItems} = context;
    const addFood = ()=>{
      console.log(id);
      addItems(id);
    }
  return (
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
          <Typography variant="body2" color="text.secondary">
            Price : Rs{price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Category : {category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default FoodItem