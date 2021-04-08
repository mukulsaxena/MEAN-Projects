var mongoose = require('mongoose')
var schema = mongoose.Schema

var publisher = new schema({
    name: { type: String, required: true, max: 25},
    noOfBooks: { type: Number, required: true},
    noOfEmployees: { type: Number},
    books: { type: Array, required: true}
})

module.exports = mongoose.model('publisher', publisher)