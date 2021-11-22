const router = require('express').Router()
const {GET, DELETE} = require('./controller.js')

router.route('/admin/groups')
      .get( GET )
      .delete( DELETE )

module.exports = router      