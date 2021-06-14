'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: 'enter name'
  },
  address: {
    type: String,
    required: "enter address"
  },
  employid: {
    type: String,
    required: "enter employee id"
  },
});

module.exports = mongoose.model('Customer', CustomerSchema);