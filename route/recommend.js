const express = require('express');
const recommendController = require("../controller/recommend")


const recommendRoute = express.Router();


recommendRoute.post('/post', recommendController.postRecommendHandler)
// recommendRoute.get('/get', recommendController.getMusicHandler)
// recommendRoute.get('/get/:date', recommendController.getMusicIdHandler)



module.exports = recommendRoute

