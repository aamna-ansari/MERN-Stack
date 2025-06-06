//
const express = require("express");
// MongoDB
const { connectToMongoDB } = require("./connect");
// Import Routes here
const urlRoute = require("./routes/url");

// Import model
const URL = require("./models/url"); 

// Import StaticRouter 
const staticRoute = require('./routes/staticRouter')

// Path middleware import
const path = require("path");

// Conect mongdb by function
connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("MongoDB Connected")
);

// Create app
const app = express();

// Port
const PORT = 8000;

// 📍 When work with  EJS

// Step1: Which engine i used for SSR(server Side Rendering)
app.set("view engine", "ejs");

// Where ejs file | need to path middleware also ⬆
app.set("views", path.resolve("./views"));

// Use middleware
app.use(express.json());

// Another Midddle to get/ pass form data 
app.use(express.urlencoded({extended:false}))

// For just test EJS | SSR
// Test route
// app.get("/test", async (req, res) => {
//     try {
//       const allUrls = await URL.find({});
//       return res.render('home', { urls: allUrls });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send("Error fetching data");
//     }
//   });

// Routes use
app.use("/url", urlRoute);


// app.get('/:shortId', generatedNewShortUrlById);

// ✅ Use '/' for short URL redirections
// app.use("/url", urlRoute);

// staticRouter
app.use("/", staticRoute);

// Run server
app.listen(PORT, () => {
  console.log(`Server started at Port ${PORT}`);
});
