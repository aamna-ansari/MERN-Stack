const http = require("http");

// Create a sever

const server1 = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      if (req.method === "GET") {
        res.end(`This is Home Page and My request Method is ${req.method}`);
      }
      break;

    case "/about":
      if (req.method === "GET") {
        res.write("<h1>About Page</h1>");
        res.write("<p>This is the about route.</p>");
        res.end();
      }
      break;

    case "/contact":
      if (req.method === "GET") {
        res.write("<h1>Contact Page</h1>");
        res.write("<p>Contact us at contact@example.com</p>");
        res.end();
      }
      break;

    default:
      res.statusCode = 404;
      res.write("<h1>404 - Page Not Found</h1>");
      res.end();
      break;
  }
});

// Sever run
const PORT = 8000;
server1.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
