require("dotenv").config()

const express = require("express")
const app = express()

const database = require("./config/database")
const cloudinary = require("./config/cloudinary")
const expressFileUpload = require("express-fileupload")
const Upload = require("./routes/FileUpload")

// MW 
app.use(express.json())
// app.use(express.urlencoded())

app.use(expressFileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))

// DB CONNECTION

// const {connectDB} = require("./config/database")
// connectDB();
database.connectDB()

// CLOUDINARY CONNECTION
cloudinary.ConnectToCloudinary()

// MOUNTING API ROUTES
app.use("/api/upload", Upload)


// ACTIVATE SERVER
const PORT = 4444
app.listen(PORT, () => {
    console.log(`App is running at port no : ${PORT}`)
})