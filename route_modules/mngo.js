// mngo.js - Mngo route module so I can isolate the mongo import stuff while I'm playing with it


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://pigglywiggly:@cluster0.exfbgwt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("sample_mflix").collection("users");
    // perform actions on the collection object
    console.log(collection);
  client.close();
});



const express = require("express");
const router = express.Router();

// Home page route
router.get("/", function (req, res) {
    res.send("Mngo home page <br> Try <a href='mngo/about'>about</a>");
});

// About page route
router.get("/about", function (req, res) {
  res.send("About this mngo");
});

module.exports = router;

