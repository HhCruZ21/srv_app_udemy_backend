const express = require('express')
const router = express.Router()

// routes
const authRoute = require('./auth_router')

const allRoutes = [
  {
    path: '/auth',
    route: authRoute
  }
]

allRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

module.exports = router
