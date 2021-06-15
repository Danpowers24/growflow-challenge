'use strict';

const mongoose = require('mongoose'),


Customer = mongoose.model('Customer');

// CRUD actions on "Customer" entity

exports.get_all = function(req, res) {
    Employee.find({}, function(err, employee) {
      if (err)
        res.send(err);
      res.json(employee);
    });
  };

  exports.create_a_customer = function(req, res) {
    var new_customer = new Customer(req.body);
    new_customer.save(function(err, customer) {
      if (err)
        res.send(err);
      res.json(customer);
    });
  };
  
  // This is how an async/await version of the above POST call would look like
  // I didn't go with this due to this challenge's simple MVP, and it is faster to test in Postman without waiting for the response
        // exports.create_a_employee = async (req, res) => {
        //   const new_employee = new Employee(req.body);
        //   ret = await new_employee.save();
        //   res.json(ret);
        // };
        
  exports.get_a_employee = function(req, res) {
    Employee.findById(req.params.id, function(err, employee) {
      if (err)
        res.send(err);
      res.json(employee);
    });
  };

  exports.update_a_employee = function(req, res) {
    Employee.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, employee) {
      if (err)
        res.send(err);
      res.json(employee);
    });
  };

  exports.delete_a_employee = function(req, res) {
   Employee.remove({_id: req.params.id}, function(err
    // , employee
    ) {
      if (err)
        res.send(err);
      res.json({ message: 'Employee entry successfully deleted' });
    });
  };

  