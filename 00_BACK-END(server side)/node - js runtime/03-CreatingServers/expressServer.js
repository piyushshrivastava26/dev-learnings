const express = require('express')

httpSVR = express()

httpSVR.get("/", (req, res) => {
    res.send('building server using express (current route : /)')

})
httpSVR.get("/login", (req, res) => {
    res.send(' express server (current route : /login)')

})
httpSVR.get("/signup", (req, res) => {
    res.send(' express server (current route : /signup)')

})
httpSVR.get("/logout", (req, res) => {
    res.send(' express server (current route : /logout)')

})

const portNumber = 4444

httpSVR.listen(`${portNumber}`, () => {
    console.log(`server is running at port number ${portNumber}`)
})