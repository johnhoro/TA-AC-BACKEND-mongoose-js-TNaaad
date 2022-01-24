var mongoose = require(`mongoose`);
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, min: 18, max: 30 },
    email: { type: String, lowercase: true, trim: true, match: /@/ },
    password: { type: String, minlength: 5, maxlength: 15 },
  },
  { timestamps: true }
);
