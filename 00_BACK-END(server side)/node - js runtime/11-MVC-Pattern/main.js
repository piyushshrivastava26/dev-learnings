const mongoose = require("mongoose")

const express = require("express")
const app = express()

const userRouter = require('./routes/user')

const {StoreUsersReq} = require("./middlewares/index")

mongoose
        .connect("mongodb://localhost:27017/db-4-MVCUsers")
        .then(() => console.log('[users] DB Connected'))
        .catch((err) => {console.log('error', err)})


app.use(StoreUsersReq('requests.txt'))


app.use('/users', userRouter)


const port = 2222
app.listen( `${port}`, ()=>{console.log(`app is running on port no : ${port}`);
})
