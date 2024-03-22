const express = require("express");
const route = express.Router();

const {homeRoutes,addProductRoutes,updateProductRoutes} = require('../services/render')

const {createProduct, updateProduct,deleteProduct,findProduct}= require("../controllers/productController")

route.get("/", homeRoutes);

route.get("/addProduct",addProductRoutes);

route.get("/updateProduct/:id",updateProductRoutes);

// APIs

route.get( "/api/products" , findProduct) 
route.get( "/api/products/:id" , findProduct) 
route.post( "/api/products" , createProduct) 
route.put( "/api/products/:id" , updateProduct) 
route.delete( "/api/products/:id" , deleteProduct) 



module.exports = route;