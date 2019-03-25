var mongoose = require('mongoose');

var GymSchema = new mongoose.Schema({
  code: String,
  name: String,
  services: String,
  owner: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Gym', GymSchema);
