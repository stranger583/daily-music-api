const mongoose = require('mongoose')

const RecommendSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        main: [{
            user: {
                type: String,
                required: true
            },
            song: {
                type: String,
                required: true
            },
            artist: {
                type: String,
                required: true
            },
            desc: {
                type: String,
                required: true
            },
        }],
        date: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

const Recommend = mongoose.model("Recommend", RecommendSchema)

module.exports = Recommend;