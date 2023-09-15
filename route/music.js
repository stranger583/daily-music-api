const express = require('express');
const musicController = require("../controller/music")


const musicRoute = express.Router();


musicRoute.post('/post', musicController.postMusicHandler)
musicRoute.get('/get', musicController.getMusicHandler)
musicRoute.get('/get/:date', musicController.getMusicIdHandler)



module.exports = musicRoute

