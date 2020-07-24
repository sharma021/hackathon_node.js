const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  Index_No.: { type: Number, required: true },
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Contact_No.: { type: Number, required: true },
  Date_created: { type: Number, required: true },
  List_of_products:{type: Number, required: true},
  Budget:{type: Number, required: true}
});

module.exports = mongoose.model('Thing', userSchema);
