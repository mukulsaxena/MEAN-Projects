var mongoose = require('mongoose')
var schema = mongoose.Schema;

var userSchema = new schema({
    username: {type: String, required: true, max: 50},
    email: {type: String, required: true},
    userid: {type: String, required: true}
});

module.exports = mongoose.model('user', userSchema);