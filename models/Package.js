const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
      trim: true,
    },
    fromDate: {
      type: Date,
      required: true,
      trim: true,
    },
    toDate: {
      type: Date,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      trim: true,
      default: 1
    },
    imageStr: {
      type: String,
      required: true,
      trim: true
    }
  },
  { collection: "packages" }
);

const model = mongoose.model("PackageSchema", PackageSchema);

module.exports = model;
