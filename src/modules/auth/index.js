const router = require('express').Router()
const {GET, POST, LOGOUT} = require('./controller.js')

router.route('/login')
      .get( GET )
      .post( POST )

router.route('/logout')
      .get( LOGOUT )

module.exports = router      