'use strict';

const mongoose = require('mongoose'),

Customer = mongoose.model('Customer');

exports.get_all = function(req, res) {
    Customer.find({}, function(err, customer) {
      if (err)
        res.send(err);
      res.json(customer);
    });
  };

  // Add other CRUD actions below

  exports.create_a_customer = function(req, res) {
    var new_customer = new Customer(req.body);
    new_customer.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  