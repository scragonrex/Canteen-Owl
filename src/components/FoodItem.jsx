import Card from '@mui/material/Card/Card'
import CardActionArea from '@mui/material/CardActionArea/CardActionArea'
import CardMedia from '@mui/material/CardMedia/CardMedia'
import Checkbox from '@mui/material/Checkbox/Checkbox'
import React from 'react'
import { Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent/CardContent'

const FoodItem = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Card m={2}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Food 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price : Rs 40
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default FoodItem