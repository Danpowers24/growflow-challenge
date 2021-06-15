var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Customer = require('./api/models/challengeModel'); //created customer model loading here
  Employee = require('./api/models/employeeModel'); //created employee model loading here

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Phoenixdb', { useNewUrlParser: true, useUnifiedTopology: true }); 

// this replaces the bodyParser method
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

var routes = require('./api/routes/challengeRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Phoenix (GrowFlow Challenge) API server running on port:' + port);
