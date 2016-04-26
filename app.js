// For dev: nodemon ./app.js localhost 3000

// Imports.
var express = require('express'),
    bodyParser = require('body-parser'), 
    path = require('path');

// Create instance of app.
var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Specify location of static files.
app.use(express.static(path.join(__dirname, 'public')));

// Specify html rendor
app.set("view engine","vash")

// Specify View routing handler.
var views = require('./routes/view');
app.use(views);

// Run on port 3000.
var port = process.env.PORT || 3000;

// Deploy.
var server = app.listen(port, function(){
    console.log('App is running on port: ' + port);
});