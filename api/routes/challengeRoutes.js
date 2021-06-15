'use strict';

module.exports = function(app) {
  const employee = require('../controllers/challengeController');

  // Customer Routes
  app.route('/employee')
    .get(employee.get_all)
    .post(employee.create_a_employee);

  app.route('/employee/:id')
    .get(employee.get_a_employee)
    .put(employee.update_a_employee)
    .delete(employee.delete_a_employee);
};