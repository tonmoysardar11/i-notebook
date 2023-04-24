const mongoose = require('mongoose');
// creating app backend notes data schema 
const noteSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        default: 'General'
    },
    timestamp:{
        type: Date,
        default: Date.now
    }

  });
// exporting notes schema
  module.exports=mongoose.model('notes',noteSchema);