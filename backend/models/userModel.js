const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
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
  password: {
    type: String,
    required: [true, "Please enter password"],
    maxlength: [6, "Password cannot exist 6 characters"],
    select: false, //only accessible when using select() function
  },
  role: {
    type: String,
    default: "user",
  },
  phoneNo:{
    type:Number,
    required:[true,"Please enter phone number"]
  },
  country:{
    type:String,
    default:"Sri Lanka"
  },
  resetPasswordToken: String,
  resetPasswordTokenExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
