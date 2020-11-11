const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 40
    },

    prEmail: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 8,

    },

    sendNews: {
      type:Boolean,
      default: true
    },

    validated: {
        type: Boolean,
        default: false
    },

}, { timestamps: true })


module.exports = mongoose.model('User', userSchema)