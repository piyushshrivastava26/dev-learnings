const mongoose = require("mongoose")

function connectToMongoDB(url) {
    mongoose
        .connect(url)
        .then(() => console.log('DB-6 Connected'))
        .catch((err) => {console.log('error', err)})
}

module.exports = {
    connectToMongoDB
}