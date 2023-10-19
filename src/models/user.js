const mongoose = require('mongoose')
const { emailValidator } = require('../validations/validator')
const { nameMaxLength } = require('../constants/constants')
require('dotenv').config()

const userModel = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate (value) {
        emailValidator(value)
      }
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    firstName: {
      type: String,
      maxLength: nameMaxLength,
      trim: true
    },
    lastName: {
      type: String,
      maxLength: nameMaxLength,
      trim: true
    },
    age: {
      type: Number
    },
    date: {
      type: Date,
      default: Date.now
    },
    verified: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

const user = mongoose.model('User', userModel)
module.exports = { user }
