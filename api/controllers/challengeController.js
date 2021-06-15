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
  
  // This is how an async/await version of the above POST call would look like
  // I didn't go with this due to this challenge's simple MVP, and it is faster to test in Postman without waiting for the response
        // exports.create_a_customer = async (req, res) => {
        //   const new_customer = new Customer(req.body);
        //   ret = await new_customer.save();
        //   res.json(ret);
        // };
        
  exports.get_a_customer = function(req, res) {
    Customer.findById(req.params.id, function(err, customer) {
      if (err)
        res.send(err);
      res.json(customer);
    });
  };

  exports.update_a_customer = function(req, res) {
    Customer.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, customer) {
      if (err)
        res.send(err);
      res.json(customer);
    });
  };