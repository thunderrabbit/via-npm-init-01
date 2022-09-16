var express = require('express');
const logger = require("morgan");     // HTTP request logger middleware
var app = express();

const square = require("./middleware/square.js"); // .js file extension is optional
const wiki = require("./middleware/wiki.js");  //  wiki.js will handle some routes

app.use(logger("dave_was_here"));  // write string into the same place as console.log
app.use("/wiki", wiki);   // tell wiki.js routes to be available from /wiki

app.get('/', function (req, res, next) {
   res.send(`The area of a square with a width of 4 is ${square.area(4)}`);
   next(); // pass control to the next handler
});

app.all("/secret", function (req, res, next) {
   res.send(`The area of a square with a width of 4.1 is ${square.area(4.1)}`);
   next(); // pass control to the next handler
});


app.listen(4000);
