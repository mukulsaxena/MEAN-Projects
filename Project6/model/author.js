var mongoose = require('mongoose')
var schema = mongoose.Schema

var author = new schema({
    name: { type: String, required: false, max: 25},
    qualification: { type: String, max: 10},
    desc: { type: String, max: 100},
    books: { type: Array, required: true}
})

module.exports = mongoose.model('author', author)
