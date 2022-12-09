// import
const express = require('express') 
const Insect = require('../models/insect')

// create router
const router = express.Router()



// routes

// on /insects, list all insects in database
router.get('/', (req, res) => {
    // find the insects on mongoDB
    Insect.find({})
    // then render on page
    .then((insects) => {
        res.render('insects/index.ejs', {insects})
    })
})

// on insects/show.ejs, give more details for specific insect in database
router.get('/:id', async (req, res)=>{
    // find the insect by id on mongoDB
    Insect.findById(req.params.id)
    // then render on page
    .then((insects)=> {
        res.render('insects/show.ejs', {insects})
    })
})


// export
module.exports = router