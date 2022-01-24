var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema(
  {
    title: String,
    decription: String,
    tags: String,
    createdAt: Date,
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", articleSchema);
