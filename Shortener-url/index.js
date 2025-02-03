//  
const express = require('express');
// Import Routes here
const urlRoute = require('./routes/url')

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