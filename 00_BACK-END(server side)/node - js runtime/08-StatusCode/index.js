const express = require('express')

app = express()


app.use((req, res, next) => {
    console.log('logged in to the server')
    next()
})


app.get("/", (req, res) => {
    res.send('building server using express (current route : /)')

})
app.get("/login", (req, res) => {
    res.send(' express server (current route : /login)')

})
app.get("/signup", (req, res) => {
    res.send(' express server (current route : /signup)')

})
app.get("/logout", (req, res) => {
    res.send(' express server (current route : /logout)')

})

const portNumber = 1111

app.listen(`${portNumber}`, () => {
    console.log(`server is running at port number ${portNumber}`)
})