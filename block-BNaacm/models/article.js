var mongoose = require("mongoose");
var Schema = mongoose.schema;

var articleSchema = new Schema({
  title: String,
  description: String,
});

module.exports = mongoose.model("Article", article);
