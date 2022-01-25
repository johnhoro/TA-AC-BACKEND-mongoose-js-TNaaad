var express = require("express");
var mongoose = require("mongoose");

// Importing user Model
var User = require("./models/user");

// Connected to mongodb
mongoose.connect(
  "mongodb://localhost/sample",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : "Connected...");
  }
);

var app = express();

app.use(express.json());

// post request
app.post("/users", (req, res) => {
  User.create(req.body, (err, user) => {
    console.log(err);
    res.send(user);
  });
});

// get request

app.get("/users", (req, res) => {
  User.find({}, (err, users) => {
    console.log(err);
    res.json({ users: users });
  });
});

// get request with id

app.get("/users/:id", (req, res) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    console.log(err);
    res.json(user);
  });
});

// put request

app.put("users/:id", (req, res) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updated) => {
    console.log(err);
    res.json(updated);
  });
});

// delete request

app.delete("users/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, deleted) => {
    console.log(err);
    res.send(`${deleted.name} is deleted....`);
  });
});

// server listener
app.listen(3000, () => {
  console.log("Server is listening on port 3k");
});
