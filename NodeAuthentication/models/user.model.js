/*
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   fullName: {
       type: String,
       required: true,
       trim: true,
   },
   email: {
       type: String,
       required: true,
       unique: true,
       lowercase: true,
   },
   password: {
       type: String,
       required: true
   }
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);
*/

// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Admin', 'Student', 'Visitor']
    }
});
module.exports = mongoose.model('User', userSchema);