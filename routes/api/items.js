const express = require("express");
const router = express.Router();

//Item Model for db
const Item = require("../../models/Item");

// @route   GET api/items
// @desc    GET all items
// @access  PUBLIC
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => {
      res.json(items);
    });
});

module.exports = router;
