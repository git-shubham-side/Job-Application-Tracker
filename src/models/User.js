const mongoose = require("mongoose");
const connect = require("../DB Connection/db");
const { type } = require("os");

connect();

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      uppercase: false,
      minlength: 2,
      maxlength: 50,
      match: /^[A-Za-z]+$/,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      uppercase: false,
      minlength: 2,
      maxlength: 50,
      match: /^[A-Za-z]+$/,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,

      validate: {
        validator: function checkEmail(email) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        },
        message: "Please enter a valid email address",
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    terms: {
      type: Boolean,
      required: true,
      validate: {
        validator: function terms(value) {
          return value === true;
        },
        message: "You must accept the Terms & Privacy Policy",
      },
    },
    profileUrl: {
      type: String,
      match: /^https?:\/\/.+/,
    },
  },
  { timeStamps: true },
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
