var mongoose = require('mongoose');

var animalSchema = new mongoose.Schema({
  name : String,
  info : String,
}
// , {timestamps: true}
);

module.exports = mongoose.model('Animal', animalSchema);
