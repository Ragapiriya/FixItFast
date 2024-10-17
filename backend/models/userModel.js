const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: [true, "Please enter Name"],
  },
  email: {
    type: String,
    required: [true, "Please enter Email"],
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },

  contactNumber: {
    type: Number,
  },
  country: {
    type: String,
    default: "Sri Lanka",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  picture: {
    type: String,
  },
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
