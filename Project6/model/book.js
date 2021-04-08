var mongoose = require('mongoose')
var schema = mongoose.Schema

var book = new schema({
    title: { type: String, required: true, max: 100},
    author: { type: String, required: true, max: 25},
    price: { type: Number, required: true }, 
    pages: { type: Number},
    genre: { type: String, required: true},
    publisher: { type: String, required: true}
})

module.exports = mongoose.model('book', book)

