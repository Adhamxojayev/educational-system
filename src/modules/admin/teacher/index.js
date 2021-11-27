const router = require('express').Router()
const {GET, ADD, ADDED, DELETE} = require('./controller.js')

router.route('/admin/teachers')
      .get( GET )
      .delete( DELETE )



router.route('/admin/add/teachers')
      .get( ADD )
      .post( ADDED )

module.exports = router   