const router = require('express').Router()
const {GET, DELETE, ADD, ADDED} = require('./controller.js')

router.route('/admin/groups')
      .get( GET )
      .delete( DELETE )

router.route('/admin/add/groups')
      .get( ADD )
      .post( ADDED )

module.exports = router      