const mongoose=require('mongoose')
const bcrypt=require("bcrypt")
const JWT =require('jsonwebtoken')
const createUser=async(req,res)=>{
    const {username,PhoneNo,Email,Password}=req.body;
    try{
        const hashedPassword = await bcrypt.hash(Password, 10);
        const ExEmail=users.find({Email});
        if(!ExEmail){
            res.status(200).json({
                Msg:"new user created",
                New:newuser
               })
            res.status(402).json({
               Msg:"User already Exist"
            })
       }
        const newuser=await users.create({"username":username,"PhoneNo":PhoneNo,"Email":Email,"Password":hashedPassword});
        if(!newuser){
            res.status(404).json({
                Msg:"Oops something went wrong"
            })
        }
        
    }catch(err){
        res.status(500).json({
            Msg:"Server Error",
            error:err
        })
    }
}

const VerUSer = async(req, res) => {
    const { Email, Password } = req.body;
    try {
      const ver = await users.findOne({Email});
      if (ver) {
        const isMatch = await bcrypt.compare(Password, ver.Password);
        if (isMatch) {
            const Token=JWT.sign({Email},"Y+88p4NldTYqVNWLSVKODcprx0g59PackkQWqGwxow0=",{
                expiresIn:"2h",
            })
            if(!Token){
                res.send("you are an unauthorized user!")
            }
            return res.status(200).json({
            Msg: "Login Successful",
            Email,
            Password,
            Token,
          });
        } else {
          return res.status(401).json({
            Msg: "Invalid credentials",
          });
        }
      } else {
        return res.status(401).json({
          Msg: "Invalid credentials",
        });
      }
    } catch (err) {
      return res.status(500).json({
        Msg: "Server error",
        error: err,
      });
    }
  };
module.exports = {createUser,VerUSer};