'use strict';

const mongoose = require('mongoose'),

Customer = mongoose.model('Customers');

exports.get_all = function(req, res) {
    Customer.find({}, function(err, customer) {
      if (err)
        res.send(err);
      res.json(customer);
    });
  };

  // Add other CRUD actions below