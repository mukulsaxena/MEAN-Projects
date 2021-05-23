var express = require('express')
var router = express.Router()

var controller = require('../controller/todo')

router.get('/test', controller.test)

router.get('/todos', controller.todo_all)

router.get('/todos/:id', controller.todo_find_by_id)

router.post('/todo/create', controller.todo_create)

router.put('/todo/update/:id', controller.todo_update_by_id)

router.get('/todo/delete/:id', controller.todo_delete_by_id)

router.get('/users', controller.user_all)

router.get('/users/:id', controller.user_find_by_id)

router.post('/user/create', controller.user_create)

router.put('/user/update/:id', controller.user_update_by_id)

router.get('/user/delete/:id', controller.user_delete_by_id)

module.exports = router;