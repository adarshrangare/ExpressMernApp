const Product = require("../models/productModel");

homeRoutes = (req, res) => {
  Product.find().then((data) => {
    res.render("index", { products: data });
  });
};

addProductRoutes = (req, res) => {

    res.render("createProduct");
}

updateProductRoutes = (req, res) => {
    const id = req.params.id;

    Product.findById(id).then((data) => {
        res.render("updateProduct", { product: data });
      });

    
}

module.exports = { homeRoutes,addProductRoutes,updateProductRoutes };
