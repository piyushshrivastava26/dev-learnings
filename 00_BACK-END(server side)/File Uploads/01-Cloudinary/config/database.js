require("dotenv").config()
console.log("Connection String:", process.env.DB_CONNECTION_STRING);

const mongoose = require("mongoose")

exports.connectDB = async () => {
    await mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(console.log("DB Connected"))
    .catch((error) => {
        console.log("DB Connection Issue");
        console.error(error);
        process.exit(1)
    })
}
