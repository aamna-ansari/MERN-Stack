const express = require("express");
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
},
{timestamps:true});


// Model | Always start with Capital letter

const User = mongoose.model("user", userSchema);

// Middleware
app.use(express.urlencoded({ extended: false }));

// Create routes
app.get("/users", async (req, res) => {
    const allDbUSers = await User.find({});
    const html = `
    <ul>
    ${allDbUSers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>
    `;
    res.send(html);
  });

//   GET api Users

app.get("/api/users", async(req,res)=>{
    const allDbUSers = await User.find({});
    return res.json(allDbUSers);
})

// POST | Create new User

app.post('/api/users', async (req,res)=>{
    const body = req.body;
    if (
        !body || 
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.job_title ||
        !body.gender
    ){
        return res.status(400).json({msg: 'All field are required....'});
    }
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        jobTitle: body.job_title,
        gender: body.gender
    });

    console.log("result",result)
    return res.status(201).json({msg: 'success'});
});

// get by ID

app.route('/api/users/:id')
.get(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({error: 'User not Found' })
    return res.json(user);
  })


// Run Server
app.listen(PORT, () => {
  console.log(`Server run at port http://localhost:${PORT}`);
});
