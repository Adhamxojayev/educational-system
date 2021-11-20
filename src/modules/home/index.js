const router = require('express').Router()
const {GET} = require('./controller.js')

router.route('/')
      .get( GET )

module.exports = router       