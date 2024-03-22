const Product = require("../models/productModel");

const createProduct = async (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .json({ status: "failed", message: "Data is missing" });
  }

  try {
    const { name, catagory, price, quantity, description } = req.body;

    if (!name && !catagory && !price && !quantity) {
      return res
        .status(401)
        .json({ status: "failed", message: "All fields are required" });
    }

    const newProduct = new Product({
      name,
      catagory,
      price,
      quantity,
      description,
    });

    let product = await Product.create(newProduct);
    return res.status(201).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "failed", message: error.message, error });
  }
};

const updateProduct = async (req, res) => {
    
    try {
    
    const { name, catagory, price, quantity, description } = req.body;   

    const id = req.params.id;

      if (id?.length != 24) {
        throw new Error("Invalid  ID");
      }

      const newData = { name, catagory, price, quantity, description };

      const product = await Product.findByIdAndUpdate(id, { $set: newData }, { new: true })
      if(!product){
        return res.status(404).json({
            status:"fail",
            message : "No product with the given ID was found."
        })
    }

    return res.status(200).json({
        status:'success',
        message: `Product is updated`,
        data : product
    })



}
catch(error){
    return res
      .status(500)
      .json({ status: "failed", message: error.message, error });
  

}
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
      if (id?.length != 24) {
        throw new Error("Invalid  ID");
      }

      const product = await Product.findByIdAndDelete(id);
      
      if(!product){
          return res.status(404).json({
              status:"fail",
              message : "No product with the given ID was found."
          })
      }

      //return json response
      return res.status(200).json({
          status:"success",
          data:product,
          message:"Product has been deleted"
      })


    
  } catch (error) {

    return res
      .status(500)
      .json({ status: "failed", message: error.message, error });
  

  }
};

// getting Products
const findProduct = async (req, res) => {
  const id = req.params.id;

  try {
    if (id) {
      if (id.length != 24) {
        throw new Error("Invalid  ID");
      }
      //find the product by its ID
      const product = await Product.findById(id);

      if (!product) {
        return res.status(404).json({
          status: "failed",
          message: `No product with the id ${id}`,
        });
      }

      return res.status(200).json({
        status: "success",
        message: "Product is fetched successfully",
        data: product,
      });
    } else {
      const products = await Product.find({});

      return res.status(200).json({
        status: "success",
        message: "All Products fetched successfully",
        data: products,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ status: "failed", message: error.message, error });
  }
};

module.exports = { createProduct, updateProduct, deleteProduct, findProduct };
