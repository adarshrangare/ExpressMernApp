const { Schema, model } = require("mongoose");

// Product schema definition
const productSchema = new Schema({
  // Name of the product, required, unique, and trimmed
  name: {
    type: String,
    require: true,
    trim: true,
    unique: true
  },
  // Description of the product, default is an empty string and trimmed
  description: {
    type: String,
    default: "",
    trim: true
  },
  // Price of the product, required
  price: {
    type: Number,
    require: true
  },
  // Category of the product, required and trimmed
  catagory: {
    type: String,
    require: true,
    trim: true
  },
  // Updated at timestamp, default is the current date and time
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  // Created at timestamp, default is the current date and time
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  // Quantity of the product, required, trimmed
  quantity: {
    type: Number,
    required: true,
    trim: true,
  }
});

// Product model creation
const Product = model("products", productSchema);

// Exporting the Product model
module.exports = Product;