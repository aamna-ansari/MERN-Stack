// step 1: import http built in module

const http = require("http");

// Step 2 : create server

// Point to be noted : createServer take a call back function that also take 2 arguments first is request an second one is response
//  this call back function is responsble to take request from user but how we know which one is req and res

// req is object here that hold all information of related req
const myServer = http.createServer((req, res) => {
    console.log("Request successfully sent")
    res.end('Hello, Node.js Server!')
});

// How to run this , we need a PORT to run this server 

myServer.listen(8000, () => {
    console.log('Server running at http://localhost:8000/');
    
});
