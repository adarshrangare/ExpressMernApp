const Product = require("../models/productModel");

// This function renders the homepage and fetches all products from the database
homeRoutes = (req, res) => {
  // Using the Product model, find all products and return them as an array of objects
  Product.find().then((data) => {
    // Render the index view and pass in the products array as a local variable
    res.render("index", { products: data });
  });
};

// This function renders the create product page
addProductRoutes = (req, res) => {
  // Render the createProduct view
  res.render("createProduct");
};

// This function renders the update product page with the specified product
updateProductRoutes = (req, res) => {
  // Get the id of the product to update from the request parameters
  const id = req.params.id;

  // Using the Product model, find the product with the specified id and return it as an object
  Product.findById(id).then((data) => {
    // Render the updateProduct view and pass in the product object as a local variable
    res.render("updateProduct", { product: data });
  });
};

module.exports = { homeRoutes, addProductRoutes, updateProductRoutes };
