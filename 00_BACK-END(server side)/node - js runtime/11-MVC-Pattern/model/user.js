const mongoose = require('mongoose')


const userSchema =new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String
    },
    email : {
        type : String,
        required : true,
        // unique : true
    },
    profession : {
        type : String
    }
}, {
    timestamps : true
})

const users = mongoose.model('users', userSchema) // 'user' <- name of collections

module.exports = users
