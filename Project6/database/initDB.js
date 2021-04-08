const {connect, connection} = require('mongoose')
const {config} = require('dotenv')

module.exports = () => {
    config()
    const uri = process.env.Mongo_URI
    //console.log("uri: " + uri)
    connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true 
    })
    .then(() => {
        console.log("Successfully connected to Mongo DB")
    })
    .catch(error => {
        console.log("Connection Error: " + error.message)
    })

    connection.on("connected", () => console.log("Successfully connected to DB cluster"))
    connection.on("error", () => console.log("Connection error: " + error.message))
    connection.on("disconnected", () => console.log("Database cluster disconnected"))

    
}