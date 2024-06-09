const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // unique : true
    },
    password: {
        type: String,
        required: true
    }, isAdmin: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    address: {
        type: String
    },
    mobile_no: {
        type: Number
    },
    pincode: {
        type: Number
    }

});

module.exports = mongoose.model('Users', UserSchema);