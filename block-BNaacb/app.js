var express = require(`express`);
var logger = require(`morgan`);
var mongoose = require(`mongoose`);

//connect to database
mongoose.connect("mongodb://localhost/intro", (err) => {
  console.log(err ? err : "Connected to database");
});

// instantiate the app
var app = express();

//middlewares
app.use(logger(`dev`));

//routes
app.get(`/`, (req, res) => {
  res.send(`Welcome`);
});

app.get(`/users`, (req, res) => {
  res.send(`User Page`);
});

//error handler middleware
app.use((req, res, next) => {
  res.send(`Page Not Found`);
});

//listener
app.listen(4000, () => {
  console.log(`server listening on port 4k`);
});
