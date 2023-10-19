// const { authRepository } = require('../repository/index')

const authController = {
  async register (req, res, next) {
    try {
      const { email, password } = req.body
      console.log(`Email ${email} and password ${password}`)
      // const user = await authRepository.registerUser(email, password)
    } catch (error) {
      console.error(error.message)
    }
  }
}

module.exports = authController
