const express = require("express");

const app = express();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server run on https://locahost:8000`);
});
