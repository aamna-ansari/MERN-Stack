const express = require('express');
const app = express();
const PORT = 8000;

// Create routes

app.get('/', (req,res)=>{
    res.send(console.log("Hi, I am here fromm Get Method"))
})


// Run Server 
app.listen(PORT, ()=>{
    console.log(`Server run at port http://localhost:${PORT}`)
})