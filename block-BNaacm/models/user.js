var mongoose = require("mongoose");
var Schema = mongoose.schema;

var userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String, min: 5, max: 15 },
    createdAt: Date,
  },
  { timestamp: true }
);

var user = mongoose.model("User", userSchema);

module.exports = user;
