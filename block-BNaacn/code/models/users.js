var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, lowercase: true, default: 0 },
    age: { type: Number },
    password: { type: String, min: 5 },
    createdAt: { type: Date, default: new Date() },
    favorites: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
