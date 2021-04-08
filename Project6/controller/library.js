var book = require('../model/book')
var author = require('../model/author')
var genre = require('../model/genre')
var publisher = require('../model/publisher')

exports.test = function(req, res) {
    res.send("Greetings from library Controller")
}

exports.book_all = function(req, res, next){
    book.find(function(err,book){
        if(err) return next(err)
        res.send(book)
    })
}

exports.book_find_by_id = function(req, res, next){
    book.findById(req.params.id, function(err, book){
        if(err) return next(err)
        res.send(book)
    })
}

exports.book_create = function(req, res, next){
    //console.log('Req Body:'+JSON.stringify(req.body));
    author.find({"name":req.body.author}, function(error, author){
        console.log('Author: ', author)
        
        if(author == ""){
            new_author_callback(req.body.author,req.body.title)
        }else{
            console.log('Books: ',author[0].books)
            update_author_callback(author[0].id, author[0].books, req.body.title)
        }
    
    })
    function new_author_callback(author_name,title)
    {
        var author1 = new author ({
            name: author_name,
            books: new Array(title)
        });
        author1.save(function(err, author){
            if(err) {
                return next(err);
            }
            console.log('Author saved successfully with id: ' + author.id)
        })
    }
    
    function update_author_callback(author_id, book_array, title)
    {
        console.log("id: " + author_id)
        console.log("books:", book_array)
        console.log("title:", title)
        book_array[book_array.length] = title
        console.log("books:", book_array)
        author.findByIdAndUpdate(author_id, {
            $set: {
                books: book_array
            }
        }, function(err, author){
                if(err) return next(err)
            console.log('Author Updated with id: ' + author.id)    
        })
    }


    genre.find({"name":req.body.genre}, function(error, genre){
        console.log('Genre: ', genre)
        
        if(genre == ""){
            new_genre_callback(req.body.genre,req.body.title)
        }else{
            console.log('Books: ',genre[0].books)
            update_genre_callback(genre[0].id, genre[0].books, req.body.title)
        }
    
    })
    function new_genre_callback(genre_name,title)
    {
        var genre1 = new genre ({
            name: genre_name,
            books: new Array(title)
        });
        genre1.save(function(err, genre){
            if(err) {
                return next(err);
            }
            console.log('Genre saved successfully with id: ' + genre.id)
        })
    }
    
    function update_genre_callback(genre_id, book_array, title)
    {
        console.log("id: " + genre_id)
        console.log("books:", book_array)
        console.log("title:", title)
        book_array[book_array.length] = title
        console.log("books:", book_array)
        genre.findByIdAndUpdate(genre_id, {
            $set: {
                books: book_array
            }
        }, function(err, genre){
                if(err) return next(err)
            console.log('Genre Updated with id: ' + genre.id)    
        })
    }

    publisher.find({"name":req.body.publisher}, function(error, publisher){
        console.log('Genre: ', publisher)
        
        if(publisher == ""){
            new_publisher_callback(req.body.publisher,req.body.title)
        }else{
            console.log('Books: ',publisher[0].books)
            update_publisher_callback(publisher[0].id, publisher[0].books, publisher[0].noOfBooks, req.body.title)
        }
    
    })
    function new_publisher_callback(publisher_name,title)
    {
        var publisher1 = new publisher ({
            name: publisher_name,
            books: new Array(title),
            noOfBooks: 1
        });
        publisher1.save(function(err, publisher){
            if(err) {
                return next(err);
            }
            console.log('Publisher saved successfully with id: ' + publisher.id)
        })
    }
    
    function update_publisher_callback(publisher_id, book_array, noOfBooks, title)
    {
        console.log("id: " + publisher_id)
        console.log("books:", book_array)
        console.log("title:", title)
        book_array[book_array.length] = title
        console.log("books:", book_array)
        publisher.findByIdAndUpdate(publisher_id, {
            $set: {
                books: book_array,
                noOfBooks: noOfBooks + 1
            }
        }, function(err, publisher){
                if(err) return next(err)
            console.log('Publisher Updated with id: ' + publisher.id)    
        })
    }

    var book1 = new book ({
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        pages: req.body.pages,
        genre: req.body.genre,
        publisher: req.body.publisher
    })
    book1.save(function(err, book){
        if(err) {
            return next(err);
        }
        res.send('Book saved successfully with id: ' + book.id)
    })
}

exports.book_update_by_id = function(req, res, next) {
    book.findById(req.params.id, function(error, book){
        console.log("Title: ", book.title)
        if(req.body.title != undefined) {
            find_author_callback(book.author, book.title, false, req.body.title, "")
            find_genre_callback(book.genre, book.title, false, req.body.title, "")
            find_publisher_callback(book.publisher, book.title, false, req.body.title, "")
        }
        if(req.body.author != undefined) {
            find_author_callback(book.author, book.title, false, req.body.title, req.body.author)
        }
        if(req.body.genre != undefined) {
            find_genre_callback(book.genre, book.title, false, req.body.title, req.body.genre)
        }
        if(req.body.publisher != undefined) {
            find_publisher_callback(book.publisher, book.title, false, req.body.title, req.body.publisher)
        }
    
    })
    function find_author_callback(name, title, del, newTitle, newAuthor) {
        console.log("author name: " + name)                                                                                            
        console.log("Title1: ", title)
        req.body.oldTitle = title
        author.find({"name": name}, function(error, author){
            console.log("author books: ",author[0].books , req.body.oldTitle)
            if(del == true) {
                book_delete_from_author(author[0].id, author[0].books, title)
            }else {
                book_update_from_author(author[0].id, author[0].books, req.body.oldTitle, req.body.title, author[0].name, req.body.author)
            }
        })
    }
    function book_update_from_author(id, books, title, newTitle, name, newAuthor) {
        console.log("books: " + books)
        console.log("Title2: ", title)
        console.log("Test: ", newTitle, newAuthor, id)
        if((newTitle != undefined) && (newAuthor == undefined))  {
            var index = books.indexOf(title)
            books[index] = newTitle
            author.findByIdAndUpdate(id, {$set:{books: books}}, function (error, author){
                console.log("Author updated successfully with id: " + author.id)
            })

        }else if((newAuthor != undefined) && (newTitle == undefined)) {
            console.log("Old title: ",req.body.oldTitle)
            author.findByIdAndUpdate(id, {$set:{books: books.filter(function(ele){ 
                return ele != req.body.oldTitle; 
            })}}, function (error, author){
                console.log("Author updated successfully with id: " + author.id)
            })
            author.find({"name": newAuthor}, function(error, author){
                console.log("author books1: ",author[0].books, req.body.oldTitle)
                book_add_to_new_author(author[0].id, author[0].books, req.body.oldTitle)
            })

        }else if((newAuthor != undefined) && (newTitle != undefined)) {
            author.findByIdAndUpdate(id, {$set:{books: books.filter(function(ele){ 
                return ele != req.body.oldTitle; 
            })}}, function (error, author){
                console.log("Author updated successfully with id: " + author.id)
            })
            author.find({"name": newAuthor}, function(error, author){
                console.log("author books0: " + author[0].books, req.body.title)
                book_add_to_new_author(author[0].id, author[0].books, req.body.title)
            })

        } 
    }

    function book_add_to_new_author(id, books, title) {
        console.log("Title3: ", title)
        books[books.length] = title
        author.findByIdAndUpdate(id, {$set:{books: books}}, function(error, author){
            console.log("Book has been added succesfully to author id: " + author.id)
        })

    }






    function find_genre_callback(name, title, del, newTitle, newGenre) {
        console.log("genre name: " + name)                                                                                            
        console.log("Title1: ", title)
        req.body.oldTitle = title
        genre.find({"name": name}, function(error, genre){
            console.log("genre books: ",genre[0].books , req.body.oldTitle)
            if(del == true) {
                book_delete_from_genre(genre[0].id, genre[0].books, title)
            }else {
                book_update_from_genre(genre[0].id, genre[0].books, req.body.oldTitle, req.body.title, genre[0].name, req.body.genre)
            }
        })
    }
    function book_update_from_genre(id, books, title, newTitle, name, newGenre) {
        console.log("books: " + books)
        console.log("Title2: ", title)
        console.log("Test: ", newTitle, newGenre, id)
        if((newTitle != undefined) && (newGenre == undefined))  {
            var index = books.indexOf(title)
            books[index] = newTitle
            genre.findByIdAndUpdate(id, {$set:{books: books}}, function (error, genre){
                console.log("Genre updated successfully with id: " + genre.id)
            })

        }else if((newGenre != undefined) && (newTitle == undefined)) {
            console.log("Old title: ",req.body.oldTitle)
            genre.findByIdAndUpdate(id, {$set:{books: books.filter(function(ele){ 
                return ele != req.body.oldTitle; 
            })}}, function (error, genre){
                console.log("Genre updated successfully with id: " + genre.id)
            })
            genre.find({"name": newGenre}, function(error, genre){
                console.log("genre books1: ",genre[0].books, req.body.oldTitle)
                book_add_to_new_genre(genre[0].id, genre[0].books, req.body.oldTitle)
            })

        }else if((newGenre != undefined) && (newTitle != undefined)) {
            genre.findByIdAndUpdate(id, {$set:{books: books.filter(function(ele){ 
                return ele != req.body.oldTitle; 
            })}}, function (error, genre){
                console.log("Genre updated successfully with id: " + genre.id)
            })
            genre.find({"name": newGenre}, function(error, genre){
                console.log("genre books0: " + genre[0].books, req.body.title)
                book_add_to_new_genre(genre[0].id, genre[0].books, req.body.title)
            })

        } 
    }

    function book_add_to_new_genre(id, books, title) {
        console.log("Title3: ", title)
        books[books.length] = title
        genre.findByIdAndUpdate(id, {$set:{books: books}}, function(error, genre){
            console.log("Book has been added succesfully to genre id: " + genre.id)
        })

    }






    function find_publisher_callback(name, title, del, newTitle, newPublisher) {
        console.log("publisher name: " + name)                                                                                            
        console.log("Title1: ", title)
        req.body.oldTitle = title
        publisher.find({"name": name}, function(error, publisher){
            console.log("publisher books: ",publisher[0].books , req.body.oldTitle)
            if(del == true) {
                book_delete_from_publisher(publisher[0].id, publisher[0].books, title)
            }else {
                book_update_from_publisher(publisher[0].id, publisher[0].books, req.body.oldTitle, req.body.title, publisher[0].name, req.body.publisher)
            }
        })
    }
    function book_update_from_publisher(id, books, title, newTitle, name, newPublisher) {
        console.log("books: " + books)
        console.log("Title2: ", title)
        console.log("Test: ", newTitle, newPublisher, id)
        if((newTitle != undefined) && (newPublisher == undefined))  {
            var index = books.indexOf(title)
            books[index] = newTitle
            publisher.findByIdAndUpdate(id, {$set:{books: books}}, function (error, publisher){
                console.log("publisher updated successfully with id: " + publisher.id)
            })

        }else if((newPublisher != undefined) && (newTitle == undefined)) {
            console.log("Old title: ",req.body.oldTitle)
            publisher.findByIdAndUpdate(id, {$set:{books: books.filter(function(ele){ 
                return ele != req.body.oldTitle; 
            })}}, function (error, publisher){
                console.log("Publisher updated successfully with id: " + publisher.id)
            })
            publisher.find({"name": newPublisher}, function(error, publisher){
                console.log("publisher books1: ",publisher[0].books, req.body.oldTitle)
                book_add_to_new_publisher(publisher[0].id, publisher[0].books, req.body.oldTitle)
            })

        }else if((newPublisher != undefined) && (newTitle != undefined)) {
            publisher.findByIdAndUpdate(id, {$set:{books: books.filter(function(ele){ 
                return ele != req.body.oldTitle; 
            })}}, function (error, publisher){
                console.log("publisher updated successfully with id: " + publisher.id)
            })
            publisher.find({"name": newPublisher}, function(error, publisher){
                console.log("publisher books0: " + publisher[0].books, req.body.title)
                book_add_to_new_publisher(publisher[0].id, publisher[0].books, req.body.title)
            })

        } 
    }

    function book_add_to_new_publisher(id, books, title) {
        console.log("Title3: ", title)
        books[books.length] = title
        publisher.findByIdAndUpdate(id, {$set:{books: books}}, function(error, publisher){
            console.log("Book has been added succesfully to publisher id: " + publisher.id)
        })

    }



    book.findByIdAndUpdate(req.params.id, {$set:req.body}, function(err, book){
        if(err) return next(err)
        res.send('Book id ' + book.id + ' has been updated successfully.')
    })
}

exports.book_delete_by_id = function(req, res, next) {
    console.log("id: " + req.params.id)
    book.findById(req.params.id, function(error, book){
        find_author_callback(book.author, book.title, true, "")
        find_genre_callback(book.genre, book.title, true, "")
        find_publisher_callback(book.publisher, book.title, true, "")
    })

    function find_author_callback(name, title, del, newTitle, newAuthor) {
        console.log("author name: " + name)
        author.find({"name": name}, function(error, author){
            console.log("author books: " + author[0].books)
            if(del == true) {
                book_delete_from_author(author[0].id, author[0].books, title)
            }else {
                book_update_from_author(author[0].id, author[0].books, title, newTitle, author[0].name, newAuthor)
            }
        })
    }

    function book_delete_from_author(id, books, title) {
        console.log("books: " + books)
        author.findByIdAndUpdate(id, {$set:{books: books.filter(function(ele){ 
            return ele != title; 
        })}}, function (error, author){
            console.log("Author updated successfully with id: " + author.id)
        })
    }



    function find_genre_callback(name, title, del, newTitle, newGenre){
        console.log("genre name: " + name)
        genre.find({"name": name}, function(error, genre){
            console.log("author books: " + genre[0].books)
            if(del == true) {
                book_delete_from_genre(genre[0].id, genre[0].books, title)
            }else {
                book_update_from_genre(genre[0].id, genre[0].books, title, newTitle, newGenre)
            }
        })
    }

    function book_delete_from_genre(id, books, title) {
        console.log("books: " + books)
        genre.findByIdAndUpdate(id, {$set:{books: books.filter(function(ele){ 
            return ele != title; 
        })}}, function (error, genre){
            console.log("Genre updated successfully with id: " + genre.id)
        })
    }


    function find_publisher_callback(name, title, del, newTitle, newPublisher){
        console.log("publisher name: " + name)
        publisher.find({"name": name}, function(error, publisher){
            console.log("publisher books: " + publisher[0].books)
            if(del == true) {
                book_delete_from_publisher(publisher[0].id, publisher[0].books, publisher[0].noOfBooks, title)
            }else {
                book_update_from_publisher(publisher[0].id, publisher[0].books, publisher[0].noOfBooks, title, newTitle, newPublisher)
            }
        })
    }

    function book_delete_from_publisher(id, books, noOfBooks, title) {
        console.log("books: " + books)
        publisher.findByIdAndUpdate(id, {$set:{books: books.filter(function(ele){ 
            return ele != title; 
        }), noOfBooks: noOfBooks -1}}, function (error, publisher){
            console.log("Author updated successfully with id: " + publisher.id)
        })
    }

    book.findByIdAndDelete(req.params.id, function(err, book){
        if(err) return next(err)
        res.send('Book with id: ' + book.id + 'has been deleted successfully')
    })
}







exports.author_all = function(req, res, next){
    author.find(function(err,author){
        if(err) return next(err)
        res.send(author)
    })
}

exports.author_find_by_id = function(req, res, next){
    author.findById(req.params.id, function(err, author){
        if(err) return next(err)
        res.send(author)
    })
}

exports.author_create = function(req, res, next){
    //console.log('Req Body:'+JSON.stringify(req.body));
    var author1 = new author ({
        name: req.body.name,
        qualification: req.body.qualification,
        desc: req.body.desc,
        books: req.body.books
    })
    author1.save(function(err, author){
        if(err) {
            return next(err);
        }
        res.send('Author saved successfully with id: ' + author.id)
    })
}

exports.author_update_by_id = function(req, res, next) {
    author.findByIdAndUpdate(req.params.id, {$set:req.body}, function(err, author){
        if(err) return next(err)
        res.send('Author id ' + author.id + ' has been updated successfully.')
    })
}

exports.author_delete_by_id = function(req, res, next) {
    author.findByIdAndDelete(req.params.id, function(err, author){
        if(err) return next(err)
        res.send('Author with id: ' + author.id + 'has been deleted successfully')
    })
}







exports.genre_all = function(req, res, next){
    genre.find(function(err,genre){
        if(err) return next(err)
        res.send(genre)
    })
}

exports.genre_find_by_id = function(req, res, next){
    genre.findById(req.params.id, function(err, genre){
        if(err) return next(err)
        res.send(genre)
    })
}

exports.genre_create = function(req, res, next){
    //console.log('Req Body:'+JSON.stringify(req.body));
    var genre1 = new genre ({
        name: req.body.name,
        books: req.body.books
    })
    genre1.save(function(err, genre){
        if(err) {
            return next(err);
        }
        res.send('Genre saved successfully with id: ' + genre.id)
    })
}

exports.genre_update_by_id = function(req, res, next) {
    genre.findByIdAndUpdate(req.params.id, {$set:req.body}, function(err, genre){
        if(err) return next(err)
        res.send('Genre id ' + genre.id + ' has been updated successfully.')
    })
}

exports.genre_delete_by_id = function(req, res, next) {
    genre.findByIdAndDelete(req.params.id, function(err, genre){
        if(err) return next(err)
        res.send('Genre with id: ' + genre.id + 'has been deleted successfully')
    })
}







exports.publisher_all = function(req, res, next){
    publisher.find(function(err,publisher){
        if(err) return next(err)
        res.send(publisher)
    })
}

exports.publisher_find_by_id = function(req, res, next){
    publisher.findById(req.params.id, function(err, publisher){
        if(err) return next(err)
        res.send(publisher)
    })
}

exports.publisher_create = function(req, res, next){
    //console.log('Req Body:'+JSON.stringify(req.body));
    var publisher1 = new publisher ({
        name: req.body.name,
        noOfBooks: req.body.noOfBooks,
        noOfEmployees: req.body.noOfEmployees,
        books: req.body.books
    })
    publisher1.save(function(err, publisher){
        if(err) {
            return next(err);
        }
        res.send('Publisher saved successfully with id: ' + publisher.id)
    })
}

exports.publisher_update_by_id = function(req, res, next) {
    publisher.findByIdAndUpdate(req.params.id, {$set:req.body}, function(err, publisher){
        if(err) return next(err)
        res.send('Publisher id ' + publisher.id + ' has been updated successfully.')
    })
}

exports.publisher_delete_by_id = function(req, res, next) {
    publisher.findByIdAndDelete(req.params.id, function(err, publisher){
        if(err) return next(err)
        res.send('Publisher with id: ' + publisher.id + 'has been deleted successfully')
    })
}

