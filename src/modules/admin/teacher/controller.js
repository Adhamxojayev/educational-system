const model = require('./model.js')
const htmlController = require('../../../lib/htmlController.js')


const GET = async (req,res) => {
    try {
        res.render(...htmlController(
            req.userInfo,
            await model.teachers(req.query, req.userInfo),
            {header: 'private/header.html'}
        ))
    } catch (error) {
        console.log(error);
    }
}

const ADD = async (req,res) => {
    try {
        res.render( ...htmlController(
            req.userInfo,
            await model.addedTeacher(req.userInfo),
            {header: 'private/header.html'}
        ))
    } catch (error) {
        console.log(error);
    }
}

const ADDED = async (req,res) => {
    try {
        console.log(req.body);
        res.render( ...htmlController(
            req.userInfo,
            await model.addedTeacherPOST(req.body,req.userInfo),
            {header: 'private/header.html'}
        ))
    } catch (error) {
        console.log(error);
    }
}


const DELETE = async (req,res) => {
    try {

        let responseDelete = await model.deleted(req.body, req.userInfo)

        if(responseDelete){
            res.status(204).json({status: 204, message: 'the teacher deleted'})
        }else{
            res.status(400).json({status: 400, message: 'Something went wrong!'})
        }

    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    GET,
    ADD,
    ADDED,
    DELETE
}