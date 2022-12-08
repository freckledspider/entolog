// insect seed data

// import dotenv, mongoose, and insect schema
require('dotenv').config()
const mongoose = require('./connection')
const Insect = require('./insect')


mongoose.connection.on('open', () => {
    // insect data to start with to test functionality
    const startingInsects =  [
        {   image: "https://i.imgur.com/db0dXUN.jpg",
            family: "Sphingidae",
            genus: "Acherontia",
            species: "atropos",
            lifeStage: "Adult",
            location: "Calabria, Italy",
            date: "June 23 2022",
            notes: "Found in an open field"},

            {   image: "https://i.imgur.com/WwyrhuV.jpg",
            family: "Phylliidae",
            genus: "Pulchriphyllium",
            species: "giganteum",
            lifeStage: "Adult",
            location: "Tapah Hills, Malaysia",
            date: "July 19 2021",
            notes: "Found on a leaf"},

            {   image: "https://i.imgur.com/YKn9E8n.jpg",
            family: "Chrysomelidae",
            genus: "Charidotella",
            species: "sexpunctata",
            lifeStage: "Adult",
            location: "Toronto, Ontario, Canada",
            date: "July 1 2019",
            notes: "Found on a morning glory flower"},

            {   image: "https://i.imgur.com/wkrdjVt.jpg",
            family: "Erebidae",
            genus: "Baorisa",
            species: "hieroglyphica",
            lifeStage: "Adult",
            location: "Arunachal Pradesh, India",
            date: "March 20 2018",
            notes: "Found on a rock"},

            {   image: "https://i.imgur.com/lr5n1Vz.jpg",
            family: "Lampyridae",
            genus: "Pyractomena",
            species: "sp.",
            lifeStage: "Larva",
            location: "Montpelier, Washington County, Vermont, USA",
            date: "April 23 2017",
            notes: "Found on grass"},

            {   image: "https://i.imgur.com/bVdXGeR.jpg",
            family: "Hymenopodidae",
            genus: "Hymenopus",
            species: "coronatus",
            lifeStage: "Adult",
            location: "Betong, Yala District, South Thailand",
            date: "July 2 2016",
            notes: "Found on a leaf"},
      ]
      
      // delete the insects that are already in the database
      Insect.deleteMany({}, (err, data) => {
        // Create the new data from startingInsects
        Insect.create(startingInsects, (err, data) =>{

            console.log(data)
            mongoose.connection.close();
        })

      })
      
})