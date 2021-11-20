const homeRouter = require('./home/index.js')
const authRouter = require('./auth/index.js')
const groupRouter = require('./group/index.js')
const studentRouter = require('./student/index.js')
const teacherRouter = require('./teacher/index.js')
const adminRouter = require('./admin/index.js')


module.exports = [
    groupRouter,
    studentRouter,
    teacherRouter,
    homeRouter,
    authRouter,
    ...adminRouter
]