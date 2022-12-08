// connect to mongo database

// load dotenv
require("dotenv").config() 
// connect to mongoose database
const mongoose = require('mongoose')

// use the DATABASE_URL from the .env file
const DATABASE_URL = process.env.DATABASE_URL

const CONFIG = {
    useNewUrlParser: true, // avoid deprecation warning
    useUnifiedTopology: true // uses mongoDB driver's new connection management engine
}

// Complete the connection from the database url
mongoose.connect(DATABASE_URL, CONFIG)

// Console logs for mongoose connection status
mongoose.connection
    .on("open", ()=> console.log('Mongoose connected'))
    .on("close", ()=> console.log('Disconnected from Mongoose'))
    .on("error", (error)=> console.log('Mongoose error', error))

// export mongoose for the ability to use in other files
module.exports = mongoose
