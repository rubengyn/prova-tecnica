const mongoose = require('mongoose')

const Log = mongoose.model('Log', {
    date: String,
    ip: String,
    type: String,
    idType: String,
    message: String
})

module.exports = Log