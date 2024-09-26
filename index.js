const express = require("express");

const PORT = 8000;

// init app
const app = express();

app.set("view engine", "ejs");

// listen to server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
