const express = require("express")
const {connectToMongoDb} = require("./connection")
const staticRoute= require("./routes/staticRouter")
const urlroutes = require("./routes/url")
const URL = require("./models/url")
const app=  express();

connectToMongoDb("mongodb://127.0.0.1:27017/shorterurls").then(()=>{
  console.log("connected with mongo");
})

app.set("view engine","ejs");

app.use(express.json());
app.use(express.urlencoded({extended:false}))

// app.get("/get",(req,res)=>{
//   res.render("home")
// })

app.use("/url", urlroutes);
app.use("/",staticRoute)
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