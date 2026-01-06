import mongoose from "mongoose";
import express from "express";
import { todo } from "./models/todo.js";

let dbconn = await mongoose.connect("mongodb://localhost:27017/db-3-todo")

const app = express()

app.get('/', (req, res ) => {
    res.send('saving [todos] data to database on every reload')

    const task = new todo({date : Date.now(),
                           title : "first todo", 
                           description : 'describing about the first todo', 
                           isCompleted : false, 
                           daysNeeded : 3})    
    task.save()
})
// if using async await, use todo.create to create a new task

app.get('/tasks', async (req, res) => {
    const tasks = await todo.find({})
    res.json(tasks)
    // console.log(tasks);
    
    // res.json({date:todo.date, title:tasks.title, description:tasks.description, Completed:tasks.isCompleted, daysNeeded:tasks.daysNeeded})
})


const port = 1112
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})