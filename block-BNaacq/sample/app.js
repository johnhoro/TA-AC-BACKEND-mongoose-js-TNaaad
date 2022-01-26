var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var User = require("./models/user");
var Comment = require("./models/comments");
var Article = require("./models/article");

mongoose.connect(
  "mongodb://localhost/bog",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : "Connected...");
  }
);

var app = express();

app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(4000, () => {
  console.log("Server is listening on port 4k");
});
