// import
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const InsectRouter = require('./controllers/insect')
const session = require("express-session")
const MongoStore = require("connect-mongo")

// create express application
const app = express()

// establish mongo connection
mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE_URL)

// mongoose connection events
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disconnected from Mongo"))
.on("error", (error) => console.log(error))

// register middleware
app.use(morgan("dev"))
app.use(express.static("public"))
app.use("/static", express.static ("public"))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use('/insects', InsectRouter)
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));

// routes and routers
app.get("/", (req, res) => {
    res.render("index.ejs")
})

// start the server (listener)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

