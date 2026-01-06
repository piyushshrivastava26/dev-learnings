const express = require("express")
const router = express.Router()

const {register, login} = require("../controllers/authController")

router.get("/", (req, res)=>{
    res.json({
        message : " YOU are on /api route"
    })
})
router.post("/register", register)
router.post("/login", login)


module.exports = router;