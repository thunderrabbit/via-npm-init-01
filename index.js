var express = require('express');
var app = express();

const square = require("./square.js"); // .js file extension is optional

app.get('/', function (req, res, next) {
   res.send(`The area of a square with a width of 4 is ${square.area(4)}`);
   next(); // pass control to the next handler
});

app.all("/secret", function (req, res, next) {
   res.send(`The area of a square with a width of 4.1 is ${square.area(4.1)}`);
   next(); // pass control to the next handler
});


app.listen(4000);
