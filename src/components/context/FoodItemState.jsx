import React from 'react';
import FoodItemContext from './FoodItemContext';
const FoodItemState = (props) => {
    const allFoodItem =[
        {
            id:"1",
            name:"Food1",
            image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            category:"Veg",
            price:"30"
        },
        {
            id:"2",
            name:"Food2",
            image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            category:"Veg",
            price:"30"
        },
        {
            id:"3",
            name:"Food1",
            image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            category:"Veg",
            price:"30"
        },
        {
            id:"4",
            name:"Food1",
            image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            category:"Veg",
            price:"30"
        },
        {
            id:"5",
            name:"Food1",
            image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            category:"Veg",
            price:"30"
        },
        {
            id:"6",
            name:"Food1",
            image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            category:"Veg",
            price:"30"
        },
        {
            id:"7",
            name:"Food1",
            image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            category:"Veg",
            price:"30"
        },
        {
            id:"8",
            name:"Food1",
            image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            category:"Veg",
            price:"30"
        },
        {
            id:"9",
            name:"Food1",
            image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            category:"Veg",
            price:"30"
      },      
    ]
  return (
    <FoodItemContext.Provider value={{allFoodItem}}>
        {props.children}
    </FoodItemContext.Provider>
  )
}

export default FoodItemState;