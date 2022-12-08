// model for insect logs

// connect mongoose from connection.js
const mongoose = require('./connection')

// defining the mongoose schema
const { Schema, model } = mongoose 

const insectSchema = new  Schema({
    image: String,
    family: String,
    genus: String,
    species: String,
    lifeStage: String,
    location: String,
    date: String,
    notes: String
})

// define and export schema to be used elsewhere
const Insect = model('Insect', insectSchema)
module.exports = Insect