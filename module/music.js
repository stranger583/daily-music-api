const mongoose = require('mongoose')

const MusicSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        artist: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        imgUrl: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        like: {
            type: Number,
            required: true,
            default: 0,
        },
        browse: {
            type: Number,
            required: true,
            default: 0,
        },
        date: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

const Music = mongoose.model("Music", MusicSchema)

module.exports = Music;