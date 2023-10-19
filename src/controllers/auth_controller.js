// const { authRepository } = require('../repository/index')

const authController = {
  async test (req, res, next) {
    res.json({ ok: 'yes' })
  }
}

module.exports = authController
