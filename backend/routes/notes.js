// installed express
const express = require('express');
// installed model schemas
const Notes = require('../models/Notes');
// installed middleware
const fetchuser = require('../middleware/fetchuser');
// installed router
const router = express.Router();
// installed express validation for data validation
const { body, matchedData, validationResult } = require('express-validator');


// GETNOTES ROUTE to fetch all notes and display them
router.get('/getnotes', fetchuser, async (req, res) => {

    try {
        // finding user notes by "fetchuser" middleware to find user and its notes
        const notes = await Notes.find({ user: req.user.id })
        // sending all available notes as respond
        res.json({ notes, user: req.user.id })
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

// ADDNOTE ROUTE to create a note and save it in database
router.post('/addnote', fetchuser, [
    body('title', "Enter Valid Title").isLength({ min: 3 }),
    body('description', "Enter Valid Description").isLength({ min: 10 }),
    body('tag', "Enter Valid Tag").isLength({ min: 2 })
], async (req, res) => {
    // showing error for invalid inputs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    try {
        const { title, description, tag } = req.body;
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savednote = await note.save();
        res.json(savednote)

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error');
    }
})







module.exports = router;