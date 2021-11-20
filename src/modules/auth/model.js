const { fetch } = require("../../lib/postgres.js");
const {VALIDATE} = require('./query.js')


const validate = async ({ role, username, password }) => {
    try {
        let user = await fetch(VALIDATE, username, password, role)
        return user
    } catch (error) {
        console.error(error)
    }
}


module.exports = {
    validate
}