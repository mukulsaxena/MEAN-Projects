var mongoose = require('mongoose')
var schema = mongoose.Schema


var genre = new schema({
    name: { type: String, required: true, max: 25},
    books: { type: Array, required: true}
})

module.exports = mongoose.model('genre', genre)