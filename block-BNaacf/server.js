var express = require(`express`);
var mongoose = require(`mongoose`);

//connect to mongodb
mongoose.connect(
  "mongodb://localhost/block-BNaacf",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    console.log(err ? err : "connected true");
  }
);

var app = express();

app.get(`/`, (req, res) => {
  res.send(`welcome`);
});

app.listen(4000, () => {
  console.log(`server is listening in port 4k`);
});
