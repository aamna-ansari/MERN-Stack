//  ---------------- Import Express ------------------------ //

const express = require ('express'); 

//  ---------------- create app ------------------------ //

const app = express();
//  ---------------- create routes ------------------------ //
//  app.method(path, callback handler)

app.get('/', (req, res)=>{
    res.send(`<h1>Hello, I'm the Home Page from ${req.method}</h1>`)
})


//  ---------------- Create Server  ------------------------ //
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
  });