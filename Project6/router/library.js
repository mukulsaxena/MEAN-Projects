var express = require('express')
var router = express.Router()

var controller = require('../controller/library')

router.get('/test', controller.test)

router.get('/books', controller.book_all)

router.get('/book/:id', controller.book_find_by_id)

router.post('/book/create', controller.book_create)

router.put('/book/update/:id', controller.book_update_by_id)

router.get('/book/delete/:id', controller.book_delete_by_id)

router.get('/authors', controller.author_all)

router.get('/author/:id', controller.author_find_by_id)

router.post('/author/create', controller.author_create)

router.put('/author/update/:id', controller.author_update_by_id)

router.get('/author/delete/:id', controller.author_delete_by_id)

router.get('/genres', controller.genre_all)

router.get('/genre/:id', controller.genre_find_by_id)

router.post('/genre/create', controller.genre_create)

router.put('/genre/update/:id', controller.genre_update_by_id)

router.get('/genre/delete/:id', controller.genre_delete_by_id)

router.get('/publishers', controller.publisher_all)

router.get('/publisher/:id', controller.publisher_find_by_id)

router.post('/publisher/create', controller.publisher_create)

router.put('/publisher/update/:id', controller.publisher_update_by_id)

router.get('/publisher/delete/:id', controller.publisher_delete_by_id)


module.exports = router;

