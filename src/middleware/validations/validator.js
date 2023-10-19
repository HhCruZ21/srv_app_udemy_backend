const validator = require('validator')

const emailValidator = (value) => {
  if (!validator.isEmail(value)) {
    throw new Error('Invalid Email')
  }
}

module.exports = { emailValidator }
