const router = require('express').Router()
const {STUDENTS, STUDENT} = require('./controller.js')

router.route('/students')
      .get( STUDENTS )

router.route('/students/:studentId/:groupId')
      .get( STUDENT )

module.exports = router      