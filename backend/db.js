const mongoose= require('mongoose');
const mongoURI='mongodb://127.0.0.1:27017/CanteenOwl';

const connectToMongo=()=>
{
    mongoose.connect(mongoURI,()=>
    {
        console.log("Connected to MongoDb Compass");
    })
}

module.exports=connectToMongo