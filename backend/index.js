// importing mongoose func from db
const connectToMongoose=require('./db');
// installing express for creating api
var express = require('express')
var cors = require('cors')


// connection to mongo
connectToMongoose(); 
const app = express();
app.use(cors())
const port = 5000



// middleware needed to use req & respond with json 
app.use(express.json()) 

// creating authentication api
app.use('/api/auth',require('./routes/auth'))
// creating appdata storage api
app.use('/api/notes',require('./routes/notes'))


// hosting backend in mentioned port
app.listen(port, () => {
  console.log(`iNotebook backend listening on port http://localhost:${port}`)
})
