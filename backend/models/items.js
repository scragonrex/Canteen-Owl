const mongoose = require("mongoose");
const { Schema } = mongoose;
const ItemsSchema = new Schema({
    user:{
       type:String,
    },
    name:{
        type:String,
    },
    category:{
        type:String,
    },
    price:{
        type:String,
    },
    image:{
        type:String,
    },
    quantity:{
        type:Number,
    },
})
const Item =  mongoose.model('items',ItemsSchema);
module.exports = Item;