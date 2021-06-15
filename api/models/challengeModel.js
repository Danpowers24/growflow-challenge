'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: 'error: please enter name'
  },
  address: {
    type: String,
  },
  employid: {
    type: String,
  },
});

//   required: 'enter name'

    // required: "enter address"

    // required: "enter employee id"


module.exports = mongoose.model('Customer', CustomerSchema);