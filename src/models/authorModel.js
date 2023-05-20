const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema(
  {
    author_id: {
      type: Number,
      require: true,
      unique: true,
    },
    author_name: {
      type: String,
      require: true,
      unique: true,
    },
    age: Number,
    address: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Author", authorSchema);
