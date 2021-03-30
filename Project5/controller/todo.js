var todo = require('../model/todo')
var user = require('../model/user')

exports.test = function(req, res) {
    res.send("Greetings from todo Controller")
}

exports.todo_all = function(req, res, next){
    todo.find(function(err,todo){
        if(err) return next(err)
        res.send(todo)
    })
}

exports.user_all = function(req, res, next){
    user.find(function(err,user){
        if(err) return next(err)
        res.send(user)
    })
}

exports.todo_find_by_id = function(req, res, next){
    todo.findById(req.params.id, function(err, todo){
        if(err) return next(err)
        res.send(todo)
    })
}

exports.user_find_by_id = function(req, res, next){
    user.findById(req.params.id, function(err, user){
        if(err) return next(err)
        res.send(user)
    })
}

exports.todo_create = function(req, res, next){
    //console.log('Req Body:'+JSON.stringify(req.body));
    var todo1 = new todo ({
        title: req.body.title,
        dueByDate: req.body.dueByDate,
        createdOn: req.body.createdOn,
        status: req.body.status,
        active: req.body.active,
        username: req.body.username
    })
    todo1.save(function(err, todo){
        if(err) {
            return next(err);
        }
        res.send('Todo saved successfully with id: ' + todo.id)
    })
}

exports.user_create = function(req, res, next){
    var user1 = new user ({
        username: req.body.username,
        email: req.body.email,
        userid: req.body.userid
    })
    user1.save(function(err, user){
        if(err) return next(err)
        res.send('User saved successfully with id: ' + user.id)
    })
}

exports.todo_update_by_id = function(req, res, next) {
    todo.findByIdAndUpdate(req.params.id, {$set:req.body}, function(err, todo){
        if(err) return next(err)
        res.send('Todo id ' + todo.id + ' has been updated successfully.')
    })
}

exports.user_update_by_id = function(req, res, next) {
    user.findByIdAndUpdate(req.params.id, {$set:req.body}, function(err, user){
        if(err) return next(err)
        res.send('User id ' + user.id + ' has been updated successfully.')
    })
}

exports.todo_delete_by_id = function(req, res, next) {
    todo.findByIdAndDelete(req.params.id, function(err, todo){
        if(err) return next(err)
        res.send('Todo with id: ' + todo.id + 'has been deleted successfully')
    })
}

exports.user_delete_by_id = function(req, res, next) {
    user.findByIdAndDelete(req.params.id, function(err, user){
        if(err) return next(err)
        res.send('User with id: ' + user.id + 'has been deleted successfully')
    })
}
