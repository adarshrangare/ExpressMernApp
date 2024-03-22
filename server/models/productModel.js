const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: { type: String, require: true, trim: true, unique: true },
  description: { type: String, default: "", trim: true },
  price: { type: Number, require: true },
  catagory: { type: String, require: true, trim: true },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  quantity: {
    type: Number,
    required: true,
    trim: true,
  },
});

const Product = model("products", productSchema);

module.exports = Product;
