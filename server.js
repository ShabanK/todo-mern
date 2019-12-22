//imports
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./config/keys").mongoURI;
mongoose.Promise = global.Promise;

const items = require("./routes/api/items");

//create server
const app = express();

//middleware to parse requests in json
app.use(bodyParser.json());

//connecting to db
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database is live");
  })
  .catch(err => {
    console.error(err);
  });

//use routes

app.use("/api/items", items);

//server port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is live");
});
