const express = require('express')
const app = express()

const path = require("path")
const mongoose = require("mongoose")

const cookie = require("cookie")
const cookieParser = require("cookie-parser")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userModel = require('./models/user')

// DB
mongoose.connect("mongodb://localhost:27017/db-7", {useNewUrlParser : true, useUnifiedTopology : true})
        .then(() => console.log('DB-7 Connected'))
        .catch((err) => {console.log('error', err)})

// Engine 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares 
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(express.static(path.join(__dirname, "public")))




// Routes

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/createUser", (req, res) => {

    try {
        // fetch the data from the input
        const {username, email, password, MobileNo} = req.body
        
        // hash the password to store in db
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(password, salt, async function(err, hash) {

                const newUser = await userModel.create({ // new userModel({}) -> await newUser.save
                    username,
                    email,
                    password : hash,
                    MobileNo
                })  

                const token = jwt.sign({email : email}, "_someSecret", {expiresIn : "1h"})

                res.cookie("token", token)
                res.send(newUser)
            })
        })
        // const hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send({ error: "Internal Server Error"});
    }
})


app.get("/login", (req, res) => {
    res.render("login")
})
app.post("/login", async (req, res) => {

    const { email, password } = req.body;


    try {
        const user =await userModel.findOne({email})
        if (!user) {
            return res.status(500).send({ error: "Something went Wrong"});
        }
        else{
            bcrypt.compare(password, user.password, function (err, result) {
                if (result) {

                    let token = jwt.sign({email}, "_someSecret")

                    const options = {
                        expires : new Date(Date.now() + 2 * 24 * 60 *60 * 1000),
                        httpOnly : true
                    }
                    res.cookie("token", token, options).status(200).json({
                        success : true,
                        token,
                        user,
                        message : "User logged in successfully"
                    })

                    // Generate JWT if successful
                    // const token = jwt.sign({ id: user._id }, "SECRET_KEY", { expiresIn: "1h" });


                    res.json({
                        "Login Success" : "You are successfully logged In."
                    })
                } else {
                    // res.status(400).send({ error: "Your credentials does not match"});   
                    return res.status(400).json({
                        success: false,
                        message: "Wrong Credentials",
                    })
                }
                // console.log(result);
                
            })
        }
    } catch (error) {
        console.error("Something went wrong:", error);
        res.status(500).send({ error: "Internal Server Error"});
    }
})


app.get("/logout", (req, res) => {
    res.cookie("token", "", 
    { 
        expires: new Date(0), httpOnly: true    // this ensures that the cookie is explicitly expried not just cleared
    });

    res.status(200).json({
        message: "Successfully logged out!"
    });
});



// // Protected Route

// app.get("student", auth, verifyStudent, (req, res) => {
//     try {
//         res.send.json({
//             authorized : true,
//             message : "welcome to our student portal !"
//         })
//     } catch (error) {
//         console.log(error);
//         res.send.status(401).json({
//             authorized : false,
//             message : "something went wrong !"
//         })
        
//     }
// })






const port = 3333
app.listen(port, () => {console.log(`SERVER IS RUNNING AT PORT NO : ${port}`)})