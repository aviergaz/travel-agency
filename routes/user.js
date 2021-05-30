const router = require("express").Router();
const User = require("../models/User");

router.post("/signup", async (req, res) => {
  const body = req.body;
  try {
    const doc = await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      phone: body.phone,
      email: body.email,
      password: body.password,
      userType: body.type,
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

router.post("/login", async (req, res) => {
  const body = req.body;

  try {
    const user = await User.findOne({ email: body.email });

    if (user) {
      if (user.password === body.password) {
        res.status(200).send(user);
      } else {
        res.status(400).send("One of the details you provided is incorrect");
      }
    } else {
      res.status(404).send("User not exist. Please check the email");
    }
  } catch (e) {
    res.status(400).send("Error");
  }
});

module.exports = router;
