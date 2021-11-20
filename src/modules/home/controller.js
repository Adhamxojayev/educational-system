const htmlController = require('../../lib/htmlController.js')

const GET = async (req,res) => {
    try {
        res.render( ...htmlController(
            req.userInfo,
            {html: 'public/home.html'}
        ))
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    GET
}