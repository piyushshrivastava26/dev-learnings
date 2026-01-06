const express = require('express')
const app = express()


// middlewares
app.use('/', (req, res, next) => {
    console.log('user is successfully landed to the port no.- 2024')
    next()
})


// route
app.get('/', (req, res) => {

    // HEADERS:
    // req.header('x-coding-on', 'vs code')  <-- NOT APPROPRIATE
    console.log(req.headers);   // LOG THE INPUT HEADERS
    res.setHeader('x-created-by', 'piyush shrivastava') // USE TO SET CUSTOM HEADERS 


    res.send('learning about writing middlewares')
})

const port = 2024
app.listen(`${port}`, () => {console.log(`server is running at port number : ${port}`);
})