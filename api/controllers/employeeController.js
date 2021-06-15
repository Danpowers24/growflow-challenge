'use strict';

const mongoose = require('mongoose'),

Employee = mongoose.model('Employee');

// CRUD actions for "Employee" entity
exports.get_all = function(req, res) {
    Employee.find({}, function(err, employee) {
      if (err)
        res.send(err);
      res.json(employee);
    });
  };

  exports.create_a_employee = function(req, res) {
    var new_employee = new Employee(req.body);
    new_employee.save(function(err, employee) {
      if (err)
        res.send(err);
      res.json(employee);
    });
  };