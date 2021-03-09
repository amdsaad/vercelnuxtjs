const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  family_name: {
    type: String,
    required: true,
  },
  given_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: false,
  },
  picture: {
    type: String,
    required: false,
  },
  createDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
