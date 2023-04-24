
// install mongoose to connect mongodb
const mongoose=require ('mongoose')
const mongoURI='mongodb://127.0.0.1:27017/';
// mongoose func to connect
const connectToMongoose=async()=>{
 await mongoose.connect(mongoURI);
}

module.exports=connectToMongoose;