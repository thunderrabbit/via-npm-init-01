// mngo.js - Mngo route module so I can isolate the mongo import stuff while I'm playing with it

const express = require("express");
const router = express.Router();

// Home page route
router.get("/", function (req, res) {
  res.send("Mngo home page");
});

// About page route
router.get("/about", function (req, res) {
  res.send("About this mngo");
});

module.exports = router;

