const express = require("express");

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("NodeJS Rules !!!");
});

app.listen(port, () => {
  console.log(`App Works on port ${port}`);
});
