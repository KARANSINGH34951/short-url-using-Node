// const user = require('../models/user');
const {getuser} =require("../service/auth.js")

async function restrictToLoggedInUserOnly(req,res,next){
  const userID =req.cookies.uid;
  if(!userID) return res.redirect("/login")
    const user = getuser(userID)

  if(!user) return res.redirect("/login");

  req.user=user;
  next();
}

async function checkAuth(req,res,next){
  const userID = req.cookies.uid;

  const user = getuser(userID);
  req.user=user;
  next();
}

module.exports = {
  restrictToLoggedInUserOnly,
  checkAuth
}