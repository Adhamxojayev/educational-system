const htmlController = require('../../../lib/htmlController.js')

const GET = async (req,res) => {
    try {
        res.redirect('/admin/groups')
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    GET
}