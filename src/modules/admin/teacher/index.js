const router = require('express').Router()
const {GET} = require('./controller.js')

router.route('/admin/teachers')
      .get( GET )


module.exports = router   