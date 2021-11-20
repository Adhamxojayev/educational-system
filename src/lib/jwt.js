const { sign, verify } = require('jsonwebtoken')
const {SECRET} = require('../config.js')

module.exports = {
    sign: (payload) => sign(payload, SECRET),
    verify: (token) => verify(token, SECRET)
}
