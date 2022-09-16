// wiki.js - Wiki route module

const express = require("express");
const router = express.Router();
const square = require("./square.js"); // must be required in wiki.js even though already required in index.js

// Home page route
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

// Eventually send the parameter 4 into the function
router.get('/square/4', function (req, res, next) {
   res.send(`The area of a square with a width of 4 is ${square.area(4)}`);
   next(); // pass control to the next handler
});

module.exports = router;

