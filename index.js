const express = require("express")
const {connectToMongoDb} = require("./connection")
const urlroutes = require("./routes/url")

const app=  express();


connectToMongoDb("mongodb://127.0.0.1:27017/shorterurls").then(()=>{
  console.log("connected with mongo");
})

app.use("/url", urlroutes);


app.listen(4010,()=>console.log("server running on port 4010"));