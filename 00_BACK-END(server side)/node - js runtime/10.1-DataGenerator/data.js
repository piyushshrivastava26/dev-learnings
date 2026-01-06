const mongoose = require("mongoose")

const express = require('express')
const app = express()

const path = require('path')
const dummy = require("./models/dummy")


//db connect
mongoose
        .connect("mongodb://localhost:27017/db-5-DDG")  // DummyDataGenerator
        .then(() => console.log('[users] DB Connected'))
        .catch((err) => {console.log('error', err)})


//setting view engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));

// mw
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//fn : UTILITY FUNCTION
// const pickRandom = async function(arr){
//     let randomPick = Math.floor(Math.random() * (arr.length))
//     return arr[randomPick]
// }
const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];


//routes
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/generate-data', async (req, res) => {

  console.log("✅ /generate-data route hit");

    let rndNames = ["B Kumar", "V Kohli", "MSD", "J Bumrah", "Dale Styn"];
    let rndGender = ["Male"];
    let rndProfession = ["Cricketor", "Enginner", "Architecture", "Designer"];

    for (let i = 0; i < 10; i++) {
        await dummy.create({
            Name: pickRandom(rndNames),
            Gender: pickRandom(rndGender),
            Profession: pickRandom(rndProfession),
            Salary: Math.floor(Math.random() * 1000000)
        });
    }

  res.json({ message: "Dummy data created successfully!" });
});



const port = 3001
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})