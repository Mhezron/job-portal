const mongoose = require('mongoose')

const UserTypeSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('UserType', UserTypeSchema)