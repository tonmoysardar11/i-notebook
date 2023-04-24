
const mongoose = require('mongoose');
// creating app backend user data structure using express schema
const {Schema}=mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    timestamp:{
        type: Date,
        default: Date.now
    }

  });
// creating app model and exporting for use
  const User=mongoose.model('user',userSchema);
  module.exports=User;
  //   User.createIndexes(); ->this needed in older verson for preventing repeat data
  