var mongoose = require('mongoose')
var schema = mongoose.Schema;

var todoschema = new schema({
    title: {type: String, required: true, max: 100},
    dueByDate: {type: String, required: true},
    createdOn: {type: String, required: true},
    status: {type: String, required: true},
    active: {type: String, required: true},
    username: {type: String, required: true}
});

module.exports = mongoose.model('todo', todoschema);
