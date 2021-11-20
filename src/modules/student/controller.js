const model = require('./model.js')
const htmlController = require('../../lib/htmlController.js')

const STUDENTS = async (req,res) => {
    try {
        res.render(...htmlController(
            req.userInfo,
            await model.students(req.query,req.userInfo)
        ))
    } catch (error) {
        console.log(error);
    }
}

const STUDENT = async (req,res) => {
    try {
        res.render(...htmlController(
            req.userInfo,
            await model.studentScore(req.params, req.userInfo)
        ))
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    STUDENTS,
    STUDENT
}