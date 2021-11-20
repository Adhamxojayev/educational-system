const htmlController = require('../../lib/htmlController.js')
const model = require('./model.js')


const GET = async (req,res) => {
    try {
        res.render( ...htmlController(
            req.userInfo,
            await model.groups(req.query, req.userInfo)
        ))
    } catch (error) {
        console.log(error);
    }
}

 
module.exports = {
    GET
}
