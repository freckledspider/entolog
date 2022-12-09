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


// new insect
router.get('/new', async (req, res) => {
    res.render('insects/new.ejs')
})

router.post('/', (req, res) => {
    Insect.create(req.body, (newInsect) =>{
        res.redirect('/insects')
    })
} )


// on insects/show.ejs, give more details for specific insect in database
router.get('/:id', async (req, res)=>{
    // find the insect by id on mongoDB
    Insect.findById(req.params.id)
    // then render on page
    .then((insect)=> {
        res.render('insects/show.ejs', {insect})
    })
})


// edit insects by id
router.get('/:id/edit', (req, res) => {
    const id = req.params.id
    Insect.findById(id)
    .then((insect)=> {
        res.render('insects/edit.ejs', {insect})
    })
})


// update insect
router.put('/:id', (req, res) => {
    Insect.findByIdAndUpdate(req.params.id, req.body, {new: true},(updatedInsect) => {
        res.redirect(`/insects/${req.params.id}`)  
    })
})

// delete insect
router.delete('/:id', async (req, res) => {
    Insect.findByIdAndDelete(req.params.id, (deletedInsect) => {
        res.redirect('/insects')
    })
})


// export
module.exports = router