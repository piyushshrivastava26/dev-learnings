const userModel = require("../models/userModel")

const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")


const register = async (req, res) => {
    try {
        const {username, email, password, role} = req.body

        bcryptjs.genSalt(10, function(err, salt){
            bcryptjs.hash(password, salt, async function(err, hash) {
                
                // create the user
                const newUser = await userModel.create({    // new userModel({}) -> await newUser.save
                    username,
                    email,
                    password : hash,
                    role
                })

                // Generate a token and store in cookie
                const payload = {
                    email : newUser.email,
                    id : newUser._id,
                    role : newUser.role
                }
                const token = jwt.sign({payload}, process.env.JWT_SECRET_CODE, {expiresIn : "1h"})

                res.cookie("token", token)

                // send a response
                res.status(201).json({
                    success : true,
                    message : "new user registered in the database"
                })
            })
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : "something went wrong !"
        })
    }
}

const login = async (req, res) => {  

    try {
        const {email, password} = req.body

        let user = await userModel.findOne({email})

        if(!user){
            return res.status(404).json({ error: "User not found !!!"});
        } else {
            bcryptjs.compare(password, user.password, function(err, result){
                if(!result){
                    return res.status(500).json({success : false, message : "Wrong credentials !"})
                } else {
                    // if password matches, generate a token  with payload
                    const payload = {
                        email : user.email,
                        id : user._id,
                        role : user.role
                    }
                    let token = jwt.sign(payload, process.env.JWT_SECRET_CODE, {expiresIn : "1h"})

                    // cookie options
                    const options = {
                        expires : new Date(Date.now() + 1 * 60 * 60 * 1000),
                        httpOnly : true
                    }
                    res.cookie("token", token, options)

                    // add token and remove password from user instance :
                    user = user.toObject();
                    user.token = token;
                    user.password = undefined;

                    //send a response
                    res.status(200).json({
                        success : true, 
                        token,
                        user,
                        message : `${user.username}, logged in successfully !`
                    })
                }
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : "something went wrong !"
        })
    }
}


module.exports = {
    register,
    login
}