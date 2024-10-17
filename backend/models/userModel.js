const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required:true
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
    type: Number
  },
  country: {
    type: String,
    default: "Sri Lanka",
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
  picture:{
    type:String
  }
});
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });
// userSchema.methods.isValidPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
