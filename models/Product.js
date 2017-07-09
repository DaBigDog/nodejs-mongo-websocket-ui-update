var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  vendor: String,
  note: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);
