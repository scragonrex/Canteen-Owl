import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodItemContext from './FoodItemContext';
const FoodItemState = (props) => {
    const [menu, setMenu] = useState([]);
    const allFoodItem = [
        {
            user: "1",
            name: "Panner Makhani pizza",
            image: "https://media.istockphoto.com/id/1278998606/photo/fresh-homemade-pizza-margherita.jpg?s=612x612&w=0&k=20&c=sumJtj6CvBIsSOR0CKIDAOnth_DceTuNfz5utuN2Jxs=",
            category: "Veg",
            price: "130"
        },
        {
            user: "2",
            name: "Pasta",
            image: "https://deeniseglitz.com/wp-content/uploads/2021/08/SG-2021-Pasta-PressRelease-mac-1024x684.jpg",
            category: "Veg",
            price: "50"
        },
        {
            user: "3",
            name: "Veg Momo(6)",
            image: "https://media.istockphoto.com/id/1133151212/photo/japanese-dumplings-gyoza-with-pork-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=vC6GTUDGK6dD5_QHvY1V7fVUdPx-z4TG73DUACR_L5s=",
            category: "Veg",
            price: "30"
        },
        {
            user: "4",
            name: "Egg Roll",
            image: "https://media.istockphoto.com/id/132038607/photo/image-of-three-springs-rolls-laying-on-a-white-background.jpg?s=612x612&w=0&k=20&c=ut-UNM-Tj859Eupb5hbOixwKFR9S1eMnqllfm6Lgk2Q=",
            category: "Non-veg",
            price: "40"
        },
        {
            user: "5",
            name: "Tandoori Chicken pizza",
            image: "https://media.istockphoto.com/id/641946984/photo/pizza.jpg?s=612x612&w=0&k=20&c=Rk0DUBVtNnrs6J1OOBrEjyKMyUdPHUpnIUbXFvd3T3g=",
            category: "Non-veg",
            price: "160"
        },
        {
            user: "6",
            name: "Coco Cola",
            image: "https://media.istockphoto.com/id/458464735/photo/coke.jpg?s=612x612&w=0&k=20&c=YbmiazMmY0DkWh_W8T0pBkOgai2k62hGF1TJn9EC5W0=",
            category: "Veg",
            price: "30"
        },
        {
            user: "7",
            name: "Chicken roll",
            image: "https://media.istockphoto.com/id/1352473088/photo/fresh-chicken-tikka-roll-with-fresh-tomatos-salad-cheese-and-onions-isolated-on-bright-blue.jpg?s=612x612&w=0&k=20&c=yxtl0e9WW14JI_cX0Z6Q10osj3Ca5bTqteZewk6bQ48=",
            category: "Veg",
            price: "55"
        },
        {
            user: "8",
            name: "Coffee",
            image: "https://media.istockphoto.com/id/1286808993/photo/black-coffee-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=AzB7HbwTnEoOS7lTUUbIsyTfDh4DWoxQ9jUZDx0KNdg=",
            category: "Veg",
            price: "10"
        },
        {
            user: "9",
            name: "Chocolate pastry",
            image: "https://media.istockphoto.com/id/180751149/photo/chocolate-cake-close-up.jpg?s=612x612&w=0&k=20&c=3Fcat9WJtgt9wK-lCDi-Luo3m1NnlY4u8lmJR3mLyvw=",
            category: "Veg",
            price: "50"
        },
    ]

    //Menu set by the owner for student/faculty
    const [menusf, setMenusf] = useState([])

    const addItems = (user) => {
        for (let index = 0; index < allFoodItem.length; index++) {
            const element = allFoodItem[index];
            if (element.user === user) {
                setMenu(menu.concat({
                    user: element.user, name: element.name, image: element.image, category: element.category, price: element.price
                }))
                console.log("added item for owner",element);
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

    //Adding food items by students/faculty
    const [foodsf, setFoodsf] = useState([{user:"", name:"", price:"", category:"", image:"", quantity:1}]);

    const addFoodsf = (user, name, price, category, image)=>
    {
        setFoodsf({user:user, name:name, price:price, category:category, image:image, quantity:1});
    
    }

    //Removing food items by students/faculty
    const removeFoodsf=(user, name, price, category, image)=>{
        for (let index = 0; index < foodsf.length; index++) {
            const element = foodsf[index];
            if(element.name === name)
            {
                if(element.quantity>1)
            setFoodsf({quantity:element.quantity-1});
        }
        }
        // console.log("Added foodsf sucessfully", foodsf);
    }

    //Showing food items of students/faculty
    const showsf = ()=>{
        console.log("Items for SF", foodsf);
        
    }

    useEffect(()=>{
    },[foodsf]);
    return (
        <FoodItemContext.Provider value={{ menu, menusf, allFoodItem, addItems, addMenu, showMenu, addFoodsf, removeFoodsf, showsf}}>
            {props.children}
        </FoodItemContext.Provider>
    )
}

export default FoodItemState;