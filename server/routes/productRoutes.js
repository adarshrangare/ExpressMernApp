const express = require("express");
const route = express.Router();

const {homeRoutes,addProductRoutes,updateProductRoutes} = require('../services/render')

const {createProduct, updateProduct,deleteProduct,findProduct}= require("../controllers/productController")

// Routes for rendering views
route.get("/", homeRoutes); // Homepage
route.get("/addProduct", addProductRoutes); // Add Product page
route.get("/updateProduct/:id", updateProductRoutes); // Update Product page

// API routes for CRUD operations on products
route.get("/api/products", findProduct); // Get all products
route.get("/api/products/:id", findProduct); // Get a product by id
route.post("/api/products", createProduct); // Create a new product
route.put("/api/products/:id", updateProduct); // Update a product
route.delete("/api/products/:id", deleteProduct); // Delete a product


module.exports = route;