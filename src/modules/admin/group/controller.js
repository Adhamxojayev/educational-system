const htmlController = require('../../../lib/htmlController.js')
const model = require('./model.js')


const GET = async (req,res) => {
    try {
        res.render( ...htmlController(
            req.userInfo,
            await model.groups(req.query, req.userInfo),
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
            res.status(204).json({status: 204, message: 'the group deleted'})
        }else{
            res.status(400).json({status: 400, message: 'Something went wrong!'})
        }

    } catch (error) {
        console.log(error);
    }
}

const ADD = async (req,res) => {
    try {
        res.render( ...htmlController(
            req.userInfo,
            await model.addedGroups(req.userInfo),
            {header: 'private/header.html'}
        ))
    } catch (error) {
        console.log(error);
    }
}

const ADDED = async (req,res) => {
    try {
        res.render( ...htmlController(
            req.userInfo,
            await model.addedGroupPOST(req.body, req.userInfo),
            {header: 'private/header.html'}
        ))
    } catch (error) {
        console.log(error);
    }
}

 
module.exports = {
    GET,
    DELETE,
    ADD,
    ADDED
}