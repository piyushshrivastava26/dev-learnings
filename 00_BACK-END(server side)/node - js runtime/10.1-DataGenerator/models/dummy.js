const mongoose = require("mongoose")

const dummySchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Gender : {
        type : String
    },
    Profession : {
        type : String
    },
    Salary : {
        type : Number
    }
})

const dummy = mongoose.model('dummy', dummySchema)

module.exports = dummy