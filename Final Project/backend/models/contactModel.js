const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Contact', contactSchema)