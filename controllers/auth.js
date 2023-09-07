const mysql = require('mysql')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs') 

const db=mysql.createConnection({ //conexion al xampp
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
})

exports.register=(req,res)=>{
    console.log(req.body)

    const {nombre,email,password,confirmpassword}=req.body

    db.query('SELECT email FROM login WHERE email = ?',[email],(error,results)=>{
        if(error){
            console.log(error)
        }
        if(results.length>0){
            return res.render('register',{
                mensaje:'el email esta en uso'
            })
        }else if(password!==confirmpassword){
            return res.render('register',{
                mensaje:'la contraseñas no coinciden'
        })
    } 

    async function dato(password){

    let contraseniaHash = await bcrypt.hash(password,8)
    console.log(contraseniaHash)
    return contraseniaHash
    }
    console.log(dato(password))
    let nuevoPass = dato(password)
    //proceso de encriptado
    db.query('INSERT INTO login SET ?', {nombre:nombre,email:email,password:nuevoPass},(error,results)=>{
        if(error){
            console.log(error)
        }else{
            return res.render('register',{
                mensaje:'usuario registrado'
            })
        }
    })
   // res.send('Formulario enviado')
})
}