const router = require("express").Router();
const Order = require("../models/Order");

router.post("/new-order", async (req, res) => {
  const body = req.body;
  try {
    const doc = await Order.create({
      firstName: body.firstName,
      lastName: body.lastName,
      phone: body.phone,
      address: body.address,
      creditCardNumber: body.creditCardNumber,
      creditCardExperationDate: body.creditCardExperationDate,
      status: "Pending", // Initial status
      dealName: body.dealName,
      dealPrice: body.dealPrice,
      fromDate: body.fromDate,
      toDate: body.toDate,
      packageQuantity: body.packageQuantity,
      packageId: body.packageId,
    });

    if (doc) {
      res.status(200).send("Successfuly saved to db");
    } else {
      res.status(400).send("Something went wrong");
    }
  } catch {
    res.status(400).send("Bad request");
  }
});

router.put("/order-update", async (req, res) => {
  const body = req.body;

  try {
    const doc = await Order.findOneAndUpdate(
      { _id: body.id },
      { status: body.status }
    );

    if (doc) {
      res.status(200).send("Successfuly saved to db");
    } else {
      res.status(400).send("Something went wrong");
    }
  } catch {
    res.status(400).send("Bad request");
  }
});

router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find();

    if (orders) {
      res.status(200).send(orders);
    } else {
      res.status(404).send("No orders was found");
    }
  } catch {
    res.status(400).send("Something went wrong");
  }
});

module.exports = router;
