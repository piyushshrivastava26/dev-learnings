const express = require('express')
const app = express()

const bcrypt = require("bcrypt")



// To encrypt a password
const saltRounds = 10;
app.get("/encrypt", (req, res) => {

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash("password", salt, function(err, hash) {

            //Ideal practice : Store hash in your password DB.
            console.log(hash);
            
        });
    });

    res.send('Encrypting a password') // $2b$10$k3L1o7Ofpqsvvb.R.LrZOOHxMkhB0/CnxQSPfa/hXnndQ8w/zXiMG
});



// To decrypt one 

app.get("/decrypt", (req, res) => {
    res.send('decrypt : comparing password w hash')

    bcrypt.compare("password", "$2b$10$k3L1o7Ofpqsvvb.R.LrZOOHxMkhB0/CnxQSPfa/hXnndQ8w/zXiMG", function(err, result) {
        console.log(result); // returns a boolean response
    })

})



const port = 1112;
app.listen(port, ()=>{console.log(`app is running at ${port} port`)})