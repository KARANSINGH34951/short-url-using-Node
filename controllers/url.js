const shortid = require("shortid")
const URL = require("../models/url")

async function generateNewShortUrl(req,res){

  const body = req.body;
  if(!body.url){
    return res.status(400).json({error: "url is required"})
}

  const shortID =shortid()
  await URL.create({
    shortId:shortID,
    redirectUrl:body.url,
    visitedHistory:[],
    createdBy: req.user._id
  })
  return res.render("home",{id:shortID})
  // return res.json({id:shortID})
}

async function handleVistedHistory(req,res){
  const shortId= req.params.shortId;
  const entry=await URL.findOneAndUpdate({
    shortId 
  },{$push:{
    visitedHistory : {timestamp:Date.now()},
  }})
  res.redirect(entry.redirectUrl)
}

async function handlegetanalytics(req,res){
  const shortId = req.params.shortId
  const result =await URL.findOne({shortId})
  return res.json({totalclicks:result.visitedHistory.length, 
  analytics : result.visitedHistory
  })
}

module.exports= {
  generateNewShortUrl,
  handleVistedHistory,
  handlegetanalytics
}