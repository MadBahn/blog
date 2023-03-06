const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userid: ObjectId,
    username: String,
//    需要经过加密
    password: String
});

export const userModel = mongoose.model("userModel" ,userSchema);