const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: { 
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: [true, "you need to enter a price"]
  },
  description: { 
    type: String,
    required: true
  } 
}, {timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);