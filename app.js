const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const xss = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize')

//do the project using local mongoDB. Learn how to bring a hosted mongoDB into this later.
const mongoURI = process.env.DB_HOST;
mongoose.connect(mongoURI)

//PARSING
app.use(bodyParser.json())

//SANITIZE
app.use(xss())
app.use(mongoSanitize())

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
