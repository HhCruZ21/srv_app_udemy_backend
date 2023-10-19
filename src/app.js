/* PACKAGE IMPORTS */
const express = require('express')
const app = express()

require('dotenv').config()

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const xss = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize')

// FILE IMPORTS
const Config = require('./config/config')
const routes = require('./routes/index')

// do the project using local mongoDB. Learn how to bring a hosted mongoDB into this later.
const mongoURI = `${Config.DB_HOST}`
mongoose.connect(mongoURI)

// PARSING
app.use(bodyParser.json())

// SANITIZE
app.use(xss())
app.use(mongoSanitize())

app.use('/api', routes)

const port = Config.PORT
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
