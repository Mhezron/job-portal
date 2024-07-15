const mongoose = require('mongoose')

const UserAccountSchema = new mongoose.Schema({
    userType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserType',
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date
    },
    gender: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    contactNumber: {
        type: String,
    },
    smsNotificationActive: {
        type: Boolean,
        default: true,
    },
    emailNotificationActive: {
        type: Boolean,
        default: true,
    },
    userImage: {
        type: String,
    },
    registrationDate: {
        type: Date,
        default: Date.now,
    }

})

module.exports = mongoose.model('UserAccount', UserAccountSchema)