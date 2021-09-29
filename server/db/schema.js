const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

/////////////////////////Login & Signup Schema//////////////////////
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

UserSchema.pre("save", function (next) {
  var user = this;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      console.log("hash :", hash);
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (
  candidatePassword,
  currentPassword,
  cb
) {
  bcrypt.compare(candidatePassword, currentPassword, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};
///////////////////////////ProSchema//////////////////////////

const ProSchema = new mongoose.Schema({
  company_name: {
    type: String,
  },

  phone_number: {
    type: Number,
  },
  job_name: {
    type: String,
  },
  description: {
    type: String,
  },
});

//////////////////////////////////////////////////////////////

const User = mongoose.model("User", UserSchema);
const Pro = mongoose.model("Pro", ProSchema);
module.exports.User = User;
module.exports.Pro = Pro;
