const express = require("express")

const app=  express();

// app.get("/",(req,res)=>{
//   // res.end("yes i m running")
// })

app.listen(3111,()=>console.log("server running on port 3111"));