const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require ('fs');
const app = express();

const PORT = 8000;

// Middle Ware | like a Plugin

app.use(express.urlencoded({extended: false})) // Bodyy data added 

// Routes
// Routes for API
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// app.get('/users' , (req,res) => {
// const html = `<style>
// .card {
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   padding: 16px;
//   margin: 16px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   max-width: 300px;
// }
// .card-container {
//   display: flex;
//   flex-wrap: wrap;
//   gap: 16px;
// }
// </style>
// <div class="card-container">
// ${users
//   .map((user) => {
//     return `
//       <div class="card">
//         <h2>${user.first_name} ${user.last_name}</h2>
//         <p><strong>ID:</strong> ${user.id}</p>
//         <p><strong>Email:</strong> ${user.email}</p>
//         <p><strong>Job Title:</strong> ${user.job_title}</p>
//       </div>
//     `;
//   })
//   .join("")}
// </div>
// `;
// res.send(html)
// });
// Routes for HTML

app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});

// Dynamic routes

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id )
  return res.json(user);
});

// POST for create 
app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({...body, id:users.length + 1});
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users) , (err, data)=>{

    return res.json({Status: 'pending'});
  })
});


app.listen(PORT, () => {
  console.log(`Server Run Successfully!  `);
});
