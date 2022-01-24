var express = require("express");
var mongoose = require("mongoose");

var app = express();

mongoose.connect("mongodb://localhost/block-BNaacm", (err) => {
  console.log(err ? err : "Conencted..");
});

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
