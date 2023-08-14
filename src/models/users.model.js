const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username: {
            required: true,
            type: String
        },
        password: {
            required: true,
            type: String
        },
        email: {
            required: true,
            type: String
        },
        imgUrl: {
            required: true,
            type: String,
            default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
        },
        softDeleted:{
            required: false,
            type: Boolean,
            default: false
        },
        createdAt:{
            required: false,
            type: Date,
            default: Date.now
        },
        updatedAt:{
            required: false,
            type: Date
        }
    }
)

module.exports = mongoose.model('users', userSchema)