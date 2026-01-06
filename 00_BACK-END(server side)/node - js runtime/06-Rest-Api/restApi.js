const express = require('express')
const app = express()

const fs = require('fs')

// middleware for receiving data into the body
app.use(express.urlencoded({extended : false}))

const userData = require('./MOCK_DATA.json') 


app.get('/api/users', (req, res) => {
    // res.send('loading all users')
    return res.json(userData);
})

app.get('/api/users/:id', (req, res) => {
    // res.send('loading user with user id of your choice')
    const id = Number(req.params.id)
    const user = userData.find((user) => {
        return user.id === id
    })
    if (!user) {
        return res.status(404).json({error: `user with userID : ${id} does not exist`})
    }
    return res.json(user);
})

app.post('/api/users', (req, res) => {
    // res.send('creating a new user')

    const body = req.body
    userData.push({id : userData.length + 1, ...body})

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(userData), (err, Data) => {
        if (err) {
            console.error(err)
        } else {
            return res.json({action :'user generated', id : userData.length})            
        }
    })
    console.log(body);
})

app.patch('/api/users/:id', (req, res) => {
    res.send('updating the user details')

})

// app.delete('/api/users/:id', (req, res) => {
//     res.send('deleting the user from database')
// })


const port = 8182
app.listen(`${port}`, () => {console.log(`server is running at port number ${port}`);
})