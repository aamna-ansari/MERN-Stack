// Step 1: Import the required built-in modules
const http = require("http");
const fs = require("fs");

// Step 2: Create the server
const myServer = http.createServer((req, res) => {
    // Format the current date and time
    const formattedDate = new Date().toLocaleString();

    // Log format including request URL and method
    const log = `${formattedDate} - Request: [${req.method}] ${req.url}\n`;

    // Append the log to the log file
    fs.appendFile('./log.txt', log, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
        }
        // Respond with a success message
        res.end("Hello, Node.js Server!");
    });
});

// Step 3: Start the server and listen on port 8000
const PORT = 8000;
myServer.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
