const router = require('express').Router()
const {GET, DELETE, ADD, ADDED } = require('./controller.js')

router.route('/admin/students')
      .get( GET )
      .delete( DELETE )

router.route('/admin/add/students')
      .get( ADD )
      .post( ADDED )
    

module.exports = router      