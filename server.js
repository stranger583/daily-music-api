const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors")

const mongoose = require("mongoose")
const url = "mongodb+srv://zed042760:52bx25TLto3Ieb9K@yong.yxhvzgv.mongodb.net/?retryWrites=true&w=majority"

const musicRoute = require("./route/music")
const messageRoute = require("./route/message")
const recommendRoute = require("./route/recommend")


app.use(cors())
app.use(express.json())


app.use('/music', musicRoute)
app.use('/message', messageRoute)
app.use('/recommend', recommendRoute)



async function connect() {
    try {
        await mongoose.connect(url)
        console.log("Connected to Mongoose")
        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`);
        })
    } catch (error) {
        console.error(error)
    }
}

connect()
