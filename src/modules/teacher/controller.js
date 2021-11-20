const model = require('./model.js')
const htmlController = require('../../lib/htmlController.js')


const TEACHERS = async (req,res) => {
    try {
        res.render(...htmlController(
            req.userInfo,
            await model.teachers(req.userInfo)
        ))
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    TEACHERS,
}