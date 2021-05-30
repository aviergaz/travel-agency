const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
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
    address: {
      type: String,
      required: true,
      trim: true,
    },
    creditCardNumber: {
      type: String,
      required: true,
      trim: true,
    },
    creditCardExperationDate: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
    },
    dealName: {
      type: String,
      required: true,
      trim: true,
    },
    dealPrice: {
      type: String,
      required: true,
      trim: true,
    },
    fromDate: {
      type: String,
      required: true,
      trim: true,
    },
    toDate: {
      type: String,
      required: true,
      trim: true,
    },
    packageId: {
      type: String,
      required: true,
      trim: true,
    },
    packageQuantity: {
      type: Number,
      required: true,
      trim: true,
    }
  },
  { collection: "orders" }
);

const model = mongoose.model("OrderSchema", OrderSchema);
module.exports = model;
