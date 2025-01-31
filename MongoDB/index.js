const express = require("express");
const users = require("./MOCK_DATA.json");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;

// Connect MongoDB | connection
//  (uri/nameof DB)
mongoose
  .connect("mongodb://127.0.0.1:27017/mongoDB-practice")
  .then(() => {
    console.log("Hi, MongoDB Connected");
  })
  .catch((error) => {
    console.log("error", error);
  });

// Create schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  gender: {
    type: String,
  },
});

// Model | Always start with Capital letter

const USer = mongoose.model("user", userSchema);

// Middleware
app.use(express.urlencoded({ extended: false }));

// Create routes
app.get("/users", (req, res) => {
  res.send(`<h1>Hi, I am here from Get Method</h1>`);
});

// Run Server
app.listen(PORT, () => {
  console.log(`Server run at port http://localhost:${PORT}`);
});
