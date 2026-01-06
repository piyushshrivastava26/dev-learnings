require("dotenv").config();

const jwt = require("jsonwebtoken")


exports.auth = (req, res, next) => {
    try {
     
        // extract token : req ki body se
        // const token = req.body.token
        // console.log("body", token);

        // extract token : cookies se 
        // const token = req.cookies.token
        // console.log("cookies", token);

        // extract token : header se 
        const token = req.header('Authorization')?.replace('Bearer ', '')
        //            req.headers.authorization?.split(" ")[1]


        if(!token){
            return res.status(401).json({
                success : false,
                message : "Could not fetch the token !"
            })
        }

        // Verify the token
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_CODE)
            
            req.user = decoded;
            console.log(decoded);
            
        } catch (error) {
            console.log(error);
            return res.status(401).json({
                success : false,
                message : "Could not verify the token"
            })
        }
        next()
    } 
    catch (error) {
        res.status(401).json({
            success : false,
            message : "Authorization failed while verifying the token !"
        })
    }
}

exports.isAdmin = (req, res, next) => {
    try {
        if(req.user.role !== "admin"){
            return res.status(401).json({
                success : false,
                message : "Access denied, you are not Admin"
            })
        }
        next()
    }
    catch(error) {
        res.status(401).json({
            success : false,
            message : "Could not match admin role"
        })
    }
}

exports.isManager = (req, res, next) => {
    try {
        if(req.user.role !== "manager"){
            return res.status(401).json({
                success : false,
                message : "Access denied, you are not manager"
            })
        }
        next()
    }
    catch (error) {
        res.status(401).json({
            success : false,
            message : "Could not match manager role"
        })
    }
}

exports.isUser = (req, res, next) => {
    try {
        if(req.user.role !== "user"){
            return res.status(401).json({
                success : false,
                message : "Access denied, you are not User"
            })
        }
        next()
    }
    catch(error) {
        res.status(401).json({
            success : false,
            message : "Could not match user role"
        })
    }
}