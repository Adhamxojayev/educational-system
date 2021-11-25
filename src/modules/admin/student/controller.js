const model = require('./model.js')
const htmlController = require('../../../lib/htmlController.js')

const GET = async (req,res) => {
    try {
        res.render(...htmlController(
            req.userInfo,
            await model.students(req.query, req.userInfo),
            {header: 'private/header.html'}
        ))
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    GET,
}