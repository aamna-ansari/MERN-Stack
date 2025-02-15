const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();

const PORT = 8000;

// Middle Ware | like a Plugin

app.use(express.urlencoded({ extended: false })); // Body data added

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

// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id )
//   return res.json(user);
// });

// POST for create new user
app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ Status: "pending" });
  });
});

// Grouping Of Same Routes
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .delete((req, res) => {
    const id = Number(req.params.id); // Extract the ID from the route parameter
    const userIndex = users.findIndex((user) => user.id === id); // Find the index of the user

    if (userIndex !== -1) {
      const deletedUser = users.splice(userIndex, 1);
      fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
        return res.status(500).json({ message: "Error writing file", error: err });
      })
       // Remove the user from the array
      return res.json({
        message: "User deleted successfully",
        user: deletedUser[0], // Return the deleted user
      });
    } else {
      return res.status(404).json({ message: "User not found" }); // Handle user not found
    }
  });

app.listen(PORT, () => {
  console.log(`Server Run Successfully!  `);
});