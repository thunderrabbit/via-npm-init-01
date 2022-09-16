var express = require('express');
var app = express();

const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension

app.get('/', function(req, res){
   res.send(`The area of a square with a width of 4 is ${square.area(4)}`);
});

app.listen(4000);
