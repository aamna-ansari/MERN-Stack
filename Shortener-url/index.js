//  
const express = require('express');
// MongoDB 
const {connectToMongoDB} = require("./connect")
// Import Routes here
const urlRoute = require('./routes/url')
const { generatedNewShortUrlById} = require('./controllers/url');


// Conect mongb by function
connectToMongoDB('mongodb://localhost:27017/short-url')
.then(()=> console.log('MongoDB Connected') )


// Create app
const app = express();

// Port
const PORT = 8000;
// Use middleware
app.use(express.json())

// Routes use
app.use('/url', urlRoute);

// app.get('/:shortId', generatedNewShortUrlById);

// ✅ Use '/' for short URL redirections
app.use('/', urlRoute);



// Run server
app.listen(PORT, ()=>{
    console.log(`Server started at Port ${PORT}`);
    
})