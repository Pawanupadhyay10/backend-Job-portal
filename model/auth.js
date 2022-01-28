const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passward: {
        type: String,
        required: true
    },
    resetToken: String,
    expireToken: Date,
    resetEmailToken: String,
    expireEmailToken: Date,
    date: {
        type: Date,
        default: Date.now()
    }
})
mongoose.model("User", userSchema)