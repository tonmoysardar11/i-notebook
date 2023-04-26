const mongoose = require('mongoose');
const {Schema}=mongoose;

// creating app backend notes data schema 
const noteSchema = new Schema({
    // taking user id similar to sql command for reference
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
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