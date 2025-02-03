//  
const express = require('express');

// Create app

const app = express();

// Port
const PORT = 8000;



// Run server
app.listen(PORT, ()=>{
    console.log(`Server started at Port ${PORT}`);
    
})