const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()


app.use(cookieParser())

//setting up a cookie
app.get("/", (req, res) => {

    res.cookie("Name", "EditThisCookie")

    res.send("setting cookies on the / route")
})


app.get("/cookie", (req, res) => {
    res.send("cookie will go along with this route even without setting it (cookies hamesha chipak ke jaati hai but not authorization header)")

    console.log(req.cookies);   // req.cookies : to get the cookie setted on that route
})

const port = 1111;
app.listen(port, ()=>{console.log(`app is running at ${port} port`)})