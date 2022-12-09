// import
const express = require('express') 
const Insect = require('../models/insect')

// create router
const router = express.Router()



// routes
router.get('/', (req, res) => {
    Insect.find({})
    .then((insects) => {
        res.render('insects/index.ejs', { insects })
    })
})


// export
module.exports = router