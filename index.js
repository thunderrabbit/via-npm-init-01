var express = require('express');
const logger = require("morgan");     // HTTP request logger middleware
var app = express();

const square = require("./middleware/square.js"); // .js file extension is optional
const wiki = require("./middleware/wiki.js");  //  wiki.js will handle some routes

// BEGIN example middleware function
const a_middleware_function = function (req, res, next) {
    console.log("in a_middleware_function");    // why won't logger work here?  it's defined.. hmmm
    next(); // Call next() so Express will call the next middleware function in the chain.
};
// END example middleware function

app.use(logger("dave_was_here"));  // write string into the same place as console.log
app.use(logger('tiny'));    // e.g.  GET /wiki/square/4 304 - - 0.277 ms
app.use(a_middleware_function);

app.use("/wiki", wiki);   // tell wiki.js routes to be available from /wiki

app.use("/someroute", a_middleware_function);  // /someroute shows 404 but middleware writes to console.log

app.get('/', function (req, res, next) {
   res.send(`The area of a square with a width of 4 is ${square.area(4)}`);
   next(); // pass control to the next handler
});

app.all("/secret", function (req, res, next) {
   res.send(`The area of a square with a width of 4.1 is ${square.area(4.1)}`);
   next(); // pass control to the next handler
});


app.listen(4000);
