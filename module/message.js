const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema(
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

const Message = mongoose.model("Message", MessageSchema)

module.exports = Message;