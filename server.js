//imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const db = process.env.MONGO_URI;
mongoose.Promise = global.Promise;

const items = require("./routes/api/items");

//create server
const app = express();
app.use(cors());

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

//serve static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//server port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is live");
});
