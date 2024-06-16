const shortid = require("shortid")
const URL = require("../models/url")

async function generateNewShortUrl(req,res){

  const body = req.body
 

  if(body.url== undefined)
    { return res.status(400).json({error: "url is required"})
}

  const shortID =shortid()

  await URL.create({
    shortId:shortID,
    redirectUrl:body.url,
    visitedHistory:[]

  })

  return res.json({id:shortID})
}

module.exports= {
  generateNewShortUrl
}