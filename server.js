// Pull in required dependencies
// don't like putting everything in ORM
// below is a boiler plate
// install all of these
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
// not sure what overide is
app.use(methodOverride('_method'));

// Set Handlebars as the view engine
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
var routes = require('./controller/burger_controller.js');

app.use(routes);

app.listen(port)