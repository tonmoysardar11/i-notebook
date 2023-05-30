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
const { set } = require('mongoose');


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
        // getting items by destructuring data from request body
        const { title, description, tag } = req.body;
        // creating new notes using notes chema
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savednote = await note.save();
        res.json(savednote)
        return;

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error');
    }
})

// EDITNOTE ROUTER for access and edit notes

router.put('/editnote/:id', fetchuser, async (req, res) => {
try{// getting items from request body
const {title,description,tag}= req.body;
// creating empty object to store updated data
const updatedNotes={};
// checking data if updated or not and storing if updated
if(title){updatedNotes.title=title}
if(description){updatedNotes.description=description}
if(tag){updatedNotes.tag=tag}


let notes=await Notes.findById(req.params.id);
// checking notes is given id is available or not
if(!notes){
    return res.status(404).send('Not Found')
}
// checking if the valid user is accessing the data or not
if(notes.user.toString()!==req.user.id){
    return res.status(401).send('Not Allowed')
}
// updating notes if above conditions not apply
notes =await Notes.findByIdAndUpdate(req.params.id, {$set:updatedNotes}, {new:true})
res.json(notes)

}
catch (error) {
    console.log(error)
    res.status(500).send('Internal Server Error');
}

})







// DELETENOTE ROUTER for access and DELETE notes

router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try{
       
    
    
    let notes=await Notes.findById(req.params.id);
    // checking notes is given id is available or not
    if(!notes){
        return res.status(404).send('Not Found')
    }
    // checking if the valid user is accessing the data or not
    if(notes.user.toString()!==req.user.id){
        return res.status(401).send('Not Allowed')
    }
    // deleting notes if above conditions not apply
    notes =await Notes.findByIdAndDelete(req.params.id);
    res.json({"Success":"Note Successfully deleted",deletedData:notes})
    

    }
    catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error');
    }
    
    })
    





module.exports = router;