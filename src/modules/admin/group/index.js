const router = require('express').Router()
const {GET} = require('./controller.js')

router.route('/admin/groups')
      .get( GET )

module.exports = router      