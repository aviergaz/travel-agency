const router = require("express").Router();
const Contact = require("../models/Contact");

router.post("/contact", async (req, res) => {
  const body = req.body;
  try {
    const doc = await Contact.create({
      firstName: body.firstName,
      lastName: body.lastName,
      phone: body.phone,
      message: body.message,
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

module.exports = router;
