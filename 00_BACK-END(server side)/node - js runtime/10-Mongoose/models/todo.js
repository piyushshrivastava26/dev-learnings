import mongoose from "mongoose";
// const {Schema} = mongoose

const todoSchema = new mongoose.Schema({
    date : { type: Date, default: Date.now },
    title : String,
    description : String,
    isCompleted : Boolean,
    daysNeeded : Number
},
{timestamps:true}  // tells about the time at which the user is created and updated.
)

export const todo = mongoose.model('todo', todoSchema)
