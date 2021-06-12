'use strict';

module.exports = function(app) {
  const customer = require('../controllers/challengeController');

  // Customer Routes
  app.route('/customer')
    .get(customer.get_all) 
    // .post(customer.create_a_customer);

  app.route('/customer/:id')
  // this will get dicey with all of the different names, id, customer_id, etc. 
    .get(customer.read_specific_customer)
    // .put(customer.update_a_customer)
    // .delete(customer.delete_a_customer);
};