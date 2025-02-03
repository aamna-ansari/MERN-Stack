//  import Mongoose
const mongoose = require("mongoose");

// Create schema

const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    require: true,
    unique: true,
  },
  redirectUrl: {
    type: String,
    require: true,
  },
  visitHistory:[{
    timestamp:{
        type:Number
    }
  }]
},
{
  timestamps:true,
});
