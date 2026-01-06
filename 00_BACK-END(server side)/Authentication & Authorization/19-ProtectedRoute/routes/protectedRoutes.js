const express = require("express")
const router = express.Router()

const {auth, isUser, isManager, isAdmin} = require("../middlewares/auth")


router.get("/user", auth, isUser, (req, res) => {
    res.send(`Welcome, to user controlled route`)
})

router.get("/manager", auth, isManager,  (req, res) => {
    res.send(`Welcome, to manager controlled route`)
})

router.get("/admin", auth, isAdmin, (req, res) => {
    res.send(`Welcome, to admin controlled route`)
})


module.exports = router