var express = require('express')
var app = express()
require('./database/initDB')()

var bodyParser = require('body-parser')
var routes = require('./router/library')

app.get('/', (req, res) => {
    res.send("Library API is running");
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/library', routes)

var port = 9881
app.listen(port, () => {
    console.log('Server is running at port: ' + port)
})
 