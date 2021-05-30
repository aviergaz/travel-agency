const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    userType: {
      type: String, // 1 = admin , 2 = customer
      required: true,
      trim: true,
    },
  },
  { collection: "users" }
);

const model = mongoose.model("UserSchema", UserSchema);

module.exports = model;
