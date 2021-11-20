const htmlController = require('../../lib/htmlController.js')
const model = require('./model.js')
const {sign} = require('../../lib/jwt.js')


const GET = async (req,res) => {
    try {
        res.render( ...htmlController(
            req.userInfo,
            {html: 'public/login.html'}
        ))
    } catch (error) {
        console.log(error);
    }
}

const POST = async (req,res) => {
    try {
        let user = await model.validate(req.body)
        if(user){
            res.cookie('token', sign(user))
               .redirect('/groups')
        }else{
            res.render( ...htmlController(
                req.userInfo,
                {html: 'public/login.html', errorMessage: 'Wrog username or password'}
            ))
        }
    } catch (error) {
        console.log(error);
    }
}

const LOGOUT = async (req, res) => {
    try {
        res.clearCookie('token')
        res.redirect('/')
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    GET,
    POST,
    LOGOUT
}