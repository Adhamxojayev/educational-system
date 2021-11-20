const router = require('express').Router()
const {TEACHERS} = require('./controller.js')

router.route('/teachers')
      .get( TEACHERS )


module.exports = router      