const express = require('express')

const authControlador=require('../controllers/auth')
const router=express.Router()

router.post('/register',authControlador.register)



module.exports=router