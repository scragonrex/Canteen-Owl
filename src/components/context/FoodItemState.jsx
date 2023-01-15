import React, { useEffect, useState } from 'react';
import FoodItemContext from './FoodItemContext';
const FoodItemState = (props) => {
    const [menu, setMenu] = useState([]);
    const allFoodItem = [
        {
            id: "1",
            name: "Food1",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            category: "Veg",
            price: "30"
        },
        {
            id: "2",
            name: "Food2",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            category: "Veg",
            price: "30"
        },
        {
            id: "3",
            name: "Food3",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            category: "Veg",
            price: "30"
        },
        {
            id: "4",
            name: "Food4",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            category: "Veg",
            price: "30"
        },
        {
            id: "5",
            name: "Food5",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            category: "Veg",
            price: "30"
        },
        {
            id: "6",
            name: "Food6",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            category: "Veg",
            price: "30"
        },
        {
            id: "7",
            name: "Food7",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            category: "Veg",
            price: "30"
        },
        {
            id: "8",
            name: "Food8",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            category: "Veg",
            price: "30"
        },
        {
            id: "9",
            name: "Food9",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            category: "Veg",
            price: "30"
        },
    ]

    //Menu set by the owner for student/faculty
    const [menusf, setMenusf] = useState([])

    const addItems = (id) => {
        for (let index = 0; index < allFoodItem.length; index++) {
            const element = allFoodItem[index];
            if (element.id === id) {
                setMenu(menu.concat({
                    id: element.id, name: element.name, image: element.image, category: element.category, price: element.price
                }))
                console.log("added item",element);
            }
        }
        // console.log(menu);
    }
    
    //Adding menu for students/faculty
    const addMenu = ()=>
    {
        console.log(menu);
    setMenusf(menu);
    console.log(menusf);
    }

    const showMenu = ()=>
    {
    console.log(menusf);
    }

    return (
        <FoodItemContext.Provider value={{ menu, menusf, allFoodItem, addItems, addMenu, showMenu}}>
            {props.children}
        </FoodItemContext.Provider>
    )
}

export default FoodItemState;