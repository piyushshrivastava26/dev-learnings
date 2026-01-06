const { error } = require('console')
const express = require('express')
const app = express()
const fs = require("fs")
const path = require('path')

//setting view engine
app.set("view engine", "ejs")

app.set("views", path.join(__dirname, "views"));

// mw
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/submit-form', (req, res) => {
    const data = req.body
    console.log(data);
    res.send('form submitted successfully !')

    const logData = `${new Date().toISOString()} - ${JSON.stringify(data)}\n`;
    fs.appendFile('loginData.txt', logData, (err) => {
      // res.send('Form submitted successfully and logged!');
    });
})

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})