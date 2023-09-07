const express = require('express')
const router=express.Router()


router.get('/', (req,res)=>{  //local host 5000
    res.render('index')
})

router.get('/register', (req,res)=>{  //local host 5000
    res.render('register')
})

module.exports=router