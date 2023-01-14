import Card from '@mui/material/Card/Card'
import CardActionArea from '@mui/material/CardActionArea/CardActionArea'
import CardMedia from '@mui/material/CardMedia/CardMedia'
import Checkbox from '@mui/material/Checkbox/Checkbox'
import React from 'react'
import { Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent/CardContent'

const FoodItem = (props) => {
    const {name, price, category, image} = props;
  return (
    <Card m={2}>
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