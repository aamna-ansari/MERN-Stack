const express = require('express');
const users = require("./MOCK_DATA.json")
const app = express();
const PORT = 8000;

// Create routes

app.get('/users', (req,res)=>{
    res.send(`<h1>Hi, I am here from Get Method</h1>`)
})


// Run Server 
app.listen(PORT, ()=>{
    console.log(`Server run at port http://localhost:${PORT}`)
})