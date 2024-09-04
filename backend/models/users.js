const mongoose = require('mongoose');
const usermodel=  new mongoose.Schema({
   username:{
    type:String,
    required:true
   },
   Email:{
     type:String,
     required:true,
    //  unique:true
   },
   PhoneNo:{
    type:Number,
    required:true
   },
   Password:{
    type:String,
    required:true
   }
})
const USER=mongoose.model("User",usermodel)
module.exports =USER;