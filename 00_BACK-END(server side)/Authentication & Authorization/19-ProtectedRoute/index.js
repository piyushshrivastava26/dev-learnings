const dotenv = require('dotenv').config();

const express = require("express")
const app = express()

const dbConnect = require("./config/dbConnect")
const authRoutes = require("./routes/authRoutes")
const protectedRoutes = require("./routes/protectedRoutes");
const cookieParser = require('cookie-parser');



// Connecting to MongoDB
dbConnect()

// MW
app.use(express.json())
app.use(cookieParser())

// ROUTES
app.use("/api", authRoutes)
app.use("/api/users", protectedRoutes)




// STARTING THE SERVER
const PORT = process.env.PORT || 8001
app.listen(PORT, console.log(`app is running at port : ${PORT}`))