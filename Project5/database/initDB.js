const {connect, connection} = require('mongoose')
const {config} = require('dotenv')

module.exports = () => {
    config()
    const uri = process.env.Mongo_URI
    console.log('DB UrI: ' + uri)

    connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true        
    })
    .then(() => {
        console.log('Connection established with Mongo db successfully')
    })
    .catch(error => console.log("Connection Error: " + console.error(error.message)))
        
    connection.on("connected", () => console.log('successfully connected to db cluster'))
    connection.on("error", () => console.error(error.message))
    connection.on("disconnected", () => console.log("DB cluster disconnected."))
    
}