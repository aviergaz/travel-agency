const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');
const contactRoute = require("./routes/contact");
const userRoute = require("./routes/user");
const packageRoute = require("./routes/package");
const orderRoute = require("./routes/order");
require("./db/dbcon");

const PORT = process.env.PORT || 8080;

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(express.json());
app.use(cors());
app.use(contactRoute);
app.use(userRoute);
app.use(packageRoute);
app.use(orderRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
  });
}

app.listen(PORT, () => {
  console.log("Server is running");
});