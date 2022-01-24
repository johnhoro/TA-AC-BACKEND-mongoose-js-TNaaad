var mongoose = require(`mongoose`);
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: String,
    age: Number,
    sports: [String],
    marks: [Number],
    family: {
      father: String,
      mother: String,
    },
  },
  { timestamps: true }
);

var articleSchema = new Schema({
  title: String,
  village: String,
  city: String,
  state: String,
  pin: Number,
  description: String,
  author: Schema.Types.ObjectId,
});

var user = {
  name: "Arya",
  age: 24,
  sports: [`cricket`, `football`],
};
