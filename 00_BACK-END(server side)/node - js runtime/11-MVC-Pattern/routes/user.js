const express = require('express')

const {handleUserDBLog} = require("../controller/user")

const router = express.Router()

const users = require('../model/user')
// import {users} from "../model/user"


router.get('/', handleUserDBLog);


module.exports = router
