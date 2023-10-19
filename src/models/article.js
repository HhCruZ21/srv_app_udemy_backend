const mongoose = require('mongoose')
const { nameMaxLength, excerptMaxLength } = require('../constants/constants')
require('dotenv').config()

const articleModel = mongoose.Schema(
  {
    title: {
      type: String,
      maxLength: nameMaxLength,
      required: [true, 'Please enter a title']
    },
    content: {
      type: String,
      required: [true, 'Please enter some content']
    },
    excerpt: {
      type: String,
      required: [true, 'Please add an excerpt'],
      maxLength: excerptMaxLength
    },
    score: {
      type: Number,
      min: 0,
      max: 100,
      required: true
    },
    director: {
      type: String,
      required: true
    },
    actors: {
      type: [String],
      required: true,
      validate: {
        validator: function (array) {
          return array.length >= 3
        },
        message: 'Please add atleast 3 actors'
      }
    },
    status: {
      type: String,
      required: true,
      enum: ['draft', 'public'],
      default: 'draft',
      index: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
)

const article = mongoose.model('Articles', articleModel)
module.exports = { article }
