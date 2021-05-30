const router = require("express").Router();
const Package = require("../models/Package");

router.post("/delete-package", async (req, res) => {
  const idToRemove = req.body.id;

  try {
    const doc = await Package.findOneAndDelete({ _id: idToRemove });
    if (doc) {
      res.status(200).send("Successfuly saved to db");
    } else {
      res.status(400).send("Something went wrong");
    }
  } catch {
    res.status(400).send("Bad request");
  }
});

router.post("/packages", async (req, res) => {
  const body = req.body;

  try {
    let packages;
    if (body._id) {
      packages = await Package.find({ _id: body._id });
    } else {
      packages = await Package.find();
    }

    if (packages) {
      res.status(200).send(packages);
    } else {
      res.status(400).send("No packages were found");
    }
  } catch {
    res.status(400).send("Something went wrong");
  }
});

router.post("/add-package", async (req, res) => {
  const body = req.body;
  try {
    const doc = await Package.create({
      name: body.name,
      price: body.price,
      fromDate: body.fromDate,
      toDate: body.toDate,
      quantity: body.quantity,
      imageStr: body.imageStr
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


router.post("/edit-package", async (req, res) => {
  const packageIdToEdit = req.body.id;
  const newQuantity = req.body.newQuantity;

  try {
    const doc = await Package.findOneAndUpdate({_id: packageIdToEdit}, {quantity: newQuantity});

    if (doc) {
      res.status(200).send("Successfuly saved to db");
    } else {
      res.status(400).send("Something went wrong");
    }
  } catch {
    res.status(400).send("Bad request");
  }
});

module.exports = router;
