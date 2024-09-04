const express=require('express')
const LoginSignup=require('../controllers/Loginandsignup');
const Route=express.Router()
Route.post('/VerUser',LoginSignup.VerUSer);
Route.post('/Signup',LoginSignup.createUser);
module.exports=Route