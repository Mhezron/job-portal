const mongoose = require('mongoose')

const UserLogSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserAccount',
        required: true,
    },
    lastLoginDate: {
        type: Date,
    },
    lastApplicationDate: {
        type: Date
    }
})

module.exports = mongoose.model('UserLog', UserLogSchema)