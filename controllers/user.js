const user = require("../models/user")
const {v4:uuidv4}=require("uuid")
const {setuser}= require("../service/auth")

async  function handleUserSignUp(req,res){
  const {name,email,password} = req.body

  await user.create({
    name,
    email,
    password
  });
  return res.redirect("/")
}

async  function handleUserLogin(req,res){
  const {email,password} = req.body
  const USER=await user.findOne({ email,password})

  if(!USER)
    res.render("login",{
      error:"Invalid Username or Password"
  });
  const sessionID =  uuidv4()
  setuser(sessionID,user);
  res.cookie("uid",sessionID)
    return res.redirect("/") 
}

module.exports= {
  handleUserSignUp,
  handleUserLogin
}