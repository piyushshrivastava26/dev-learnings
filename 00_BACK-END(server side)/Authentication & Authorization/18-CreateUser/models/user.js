const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username : String,
    email : String,
    password : String,
    MobileNo : Number
})

const userModel = mongoose.model("CreateUser", userSchema)

module.exports = userModel