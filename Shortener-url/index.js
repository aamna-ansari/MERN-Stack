//  
const express = require('express');
// MongoDB 
const {connectToMongoDB} = require("./connect")
// Import Routes here
const urlRoute = require('./routes/url')


// Conect mongb by function
connectToMongoDB('mongodb://localhost:27017/short-url')
.then(()=> console.log('MongoDB Connected') )

// Create app
const app = express();

// Port
const PORT = 8000;

// Routes use
app.use('/url', urlRoute);



// Run server
app.listen(PORT, ()=>{
    console.log(`Server started at Port ${PORT}`);
    
})