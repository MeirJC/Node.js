const express = require("express");

const app = express();

app.get("/numbers", (req, res) => {
  res.send("success using get");
});

app.post("/numbers", (req, res) => {
  res.send("success using post");
});

app.delete("/numbers", (req, res) => {
  res.send("success using delete");
});

app.put("/numbers", (req, res) => {
  res.send("success using delete");
});

app.listen(4000, () => {
  console.log("Server is up on port 4000.");
});
