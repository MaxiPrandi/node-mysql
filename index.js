const express = require ('express') // motor express
const mysql= require('mysql') //motor mysql
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({path:'./.env'})

const app=express()


const db=mysql.createConnection({ //conexion al xampp
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
})

const directorioPublico=path.join(__dirname,'./public')
app.use(express.static(directorioPublico))
console.log(directorioPublico)

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set('view engine','hbs')

db.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('se conecto a la base de datos')
    }
})

app.use('/',require('./routes/pages'))

app.use('/auth',require('./routes/auth'))

app.listen(5000,()=>{
    console.log('se ejecuto servidor')
})