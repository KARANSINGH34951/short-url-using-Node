const express = require("express")
const {connectToMongoDb} = require("./connection")
const cookieparser = require("cookie-parser")
const staticRoute= require("./routes/staticRouter")
const urlroutes = require("./routes/url")
const userRoute = require("./routes/user")
const URL = require("./models/url")
const {restrictToLoggedInUserOnly} =require("./middlewares/auth")
const app=  express();
 
connectToMongoDb("mongodb://127.0.0.1:27017/shorterurls").then(()=>{
  console.log("connected with mongo");
})

app.set("view engine","ejs");

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieparser());
// app.get("/get",(req,res)=>{
//   res.render("home")
// })

app.use("/url",restrictToLoggedInUserOnly, urlroutes);
app.use("/user",userRoute);
app.use("/",staticRoute);


// app.get("/:shortId",async (req,res)=>{
//   const shortId= req.params.shortId;
//   const entry=await URL.findOneAndUpdate({
//     shortId 
//   },{$push:{
//     visitedHistory : {timestamp:Date.now()},
//   }})
//   res.redirect(entry.redirectUrl)
// })

app.listen(4010,()=>console.log("server running on port 4010"));