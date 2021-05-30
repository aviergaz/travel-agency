const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
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
    message: {
      type: String,
      trim: true,
    },
  },
  { collection: "contact-us" }
);

const model = mongoose.model("ContactSchema", ContactSchema);

module.exports = model;
