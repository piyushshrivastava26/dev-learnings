const jwt = require("jsonwebtoken")

const cookieParser = require("cookie-parser")
const express = require("express")
const app = express()

app.use(cookieParser())


app.get("/", (req, res) => {

    const token = jwt.sign({"email" : "keepgrinding@vscode.com"}, "sectetToDecrypt")
    console.log(token);   // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlZXBncmluZGluZ0B2c2NvZGUuY29tIiwiaWF0IjoxNzMzNzY5MDUxfQ.3thbqF03yXpReCg_hl46KZwZkcpE9PkQ8vTWFFY4zsA

    // Set the cookie before sending the response
    res.cookie("token", token);

    // Send the response after setting the cookie
    res.send(`JWT setup successful. Check the cookie in your browser.`)
})

app.get("/readTokenFromCookie", (req, res) => {

    console.log(req.cookies.token);
    
    res.send('reading cookies and token which stick to the routes')

    let decryptedData = jwt.verify(req.cookies.token, "sectetToDecrypt")
    console.log(decryptedData);
})


const port = 1113;
app.listen(port, () => {console.log(`app is running at port no. ${port}`)})