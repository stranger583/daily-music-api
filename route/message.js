const express = require('express');
const messageController = require("../controller/message")


const messageRoute = express.Router();


messageRoute.post('/post', messageController.postMessageHandler)
// messageRoute.get('/get', messageController.getMusicHandler)
// messageRoute.get('/get/:date', messageController.getMusicIdHandler)



module.exports = messageRoute

