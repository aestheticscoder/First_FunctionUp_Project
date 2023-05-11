const mongoose = require("mongoose");
const newSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  mobile: Number,
  emailId: String,
  password: String,
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  isDeleted: { Boolean, default: false },
  age: Number,
});
module.exports = mongoose.model("NewUser", newSchema);
