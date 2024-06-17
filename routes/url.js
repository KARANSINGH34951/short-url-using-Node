const express = require("express")
const {generateNewShortUrl, handleVistedHistory,handlegetanalytics}= require("../controllers/url")

const router = express.Router()

router.post("/",generateNewShortUrl)

router.get("/:shortId",handleVistedHistory);

router.get('/analytics/:shortId',handlegetanalytics)

module.exports = router;