const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
    name:{
        type : String,
    },
    email:{
        type : String,
    },
    profileImg:{
        type : String,
    }
})
const User = mongoose.model('users',UserSchema);
module.exports = User;