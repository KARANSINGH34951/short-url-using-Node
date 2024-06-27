const mongoose = require("mongoose");

const urlschema = new mongoose.Schema({
  shortId:{
    type:String,
    required:true,
    unique:true
  },
  redirectUrl:{
    type:String,
    required:true
  },
  visitedHistory:[{
    timestamp:{type:Number}
  },{timestamps:true}]
})

const URL = mongoose.model("url",urlschema);
module.exports= URL;