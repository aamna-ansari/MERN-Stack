//  
const express = require('express');
// MongoDB 
const {connectToMongoDB} = require("./connect")
// Import Routes here
const urlRoute = require('./routes/url')


// Path middleware import
const path = require('path');


// Conect mongb by function
connectToMongoDB('mongodb://localhost:27017/short-url')
.then(()=> console.log('MongoDB Connected') )


// Create app
const app = express();

// Port
const PORT = 8000;

// 📍 When work with  EJS

// Step1: Which engine i used for SSR(server Side Rendering)
app.set('view egine','ejs');

// Where ejs file | need to path middleware also ⬆
app.set('views', path.resolve('./views'))


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