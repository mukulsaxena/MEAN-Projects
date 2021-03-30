var express = require('express')
var app = express()
var bodyParser = require('body-parser')
require('./database/initDB')();
//var mongoose = require('mongoose')

var routes = require('./router/todo')

//mongoose.connect(dev_db_url)
//mongoose.Promise = global.Promise
//var db = mongoose.connection

app.get('/', (req,res) => {
    res.send("My Todo API is Running.")
})

//db.on('error',console.error.bind(console,'MongoDB Connection Error'));



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/todos', routes);


var port = 9001
app.listen(port, ()=>{
    console.log("Server is up and running at port: " + port)
})


