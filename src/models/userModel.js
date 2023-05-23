const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    mobile: {
      type: Number,
      required: true,
    },
    emailId: String,
    password: String,
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    age: Number,
    isDeleted: {
      type: String,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
