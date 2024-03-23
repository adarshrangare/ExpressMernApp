const Product = require("../models/productModel");

/**
 *
 * Creates a new product with the provided details.
 *
 * @param {Object} req - The request object containing the product details.
 * @param {Object} res - The response object to send the result back to the client.
 * @returns {Object} - A JSON object containing the status, message, and the created product.
 */

const createProduct = async (req, res) => {
  try {
    const { name, catagory, price, quantity, description } = req.body;
    // Check if all required fields are provided

    if (!name && !catagory && !price && !quantity) {
      return res
        .status(400)
        .json({ status: "failed", message: "All fields are required" });
    }

    const newProduct = new Product({
      name,
      catagory,
      price,
      quantity,
      description,
    });
    console.log("create Product");
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

/**
 * Updates an existing product with the provided ID and new details.
 *
 * @param {Object} req - The request object containing the product ID and new details.
 * @param {Object} res - The response object to send the result back to the client.
 * @returns {Object} - A JSON object containing the status, message, and the updated product.
 */

const updateProduct = async (req, res) => {
  try {
    const { name, catagory, price, quantity, description } = req.body;

    const id = req.params.id;
    // Check if the provided ID is valid
    if (id?.length != 24) {
      return res.status(404).json({
        status: "failed",
        message: "No product with the given ID was found.",
      });
    }

    const newData = { name, catagory, price, quantity, description };

    const product = await Product.findByIdAndUpdate(
      id,
      { $set: newData },
      { new: true }
    );
    // Check if the product with the given ID exists

    if (!product) {
      return res.status(404).json({
        status: "failed",
        message: "No product with the given ID was found.",
      });
    }

    return res.status(200).json({
      status: "success",
      message: `Product is updated`,
      data: product,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "failed", message: error.message, error });
  }
};

/**
 * Deletes a product with the provided ID.
 *
 * @param {Object} req - The request object containing the product ID.
 * @param {Object} res - The response object to send the result back to the client.
 * @returns {Object} - A JSON object containing the status, message, and the deleted product.
 */

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    // Check if the provided ID is valid

    if (id?.length != 24) {
      return res.status(404).json({
        status: "failed",
        message: "No product with the given ID was found.",
      });
    }

    const product = await Product.findByIdAndDelete(id);
    // Check if the product with the given ID exists

    if (!product) {
      return res.status(404).json({
        status: "failed",
        message: "No product with the given ID was found.",
      });
    }

    //return json response
    return res.status(200).json({
      status: "success",
      data: product,
      message: "Product has been deleted",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "failed", message: error.message, error });
  }
};


/**
 * Finds a product by its ID or returns all products if no ID is provided.
 * @param {Object} req - The request object containing the product ID (optional).
 * @param {Object} res - The response object to send the result back to the client.
 * @returns {Object} - A JSON object containing the status, message, and the product(s).
 
 * If an ID is provided, the function will return the product with the given ID. Otherwise, it will return all products in the database.
 
 */


const findProduct = async (req, res) => {
  const id = req.params.id;

  try {
    // if an ID is provided, search for that specific product
    if (id) {
      // Check if the provided ID is valid
      if (id.length != 24) {
        return res.status(404).json({
          status: "failed",
          message: `No product with the id ${id}`,
        });
      }
      //find the product by its ID
      const product = await Product.findById(id);

      // Check if the product with the given ID exists

      if (!product) {
        return res.status(404).json({
          status: "failed",
          message: `No product with the id ${id}`,
        });
      }
      // returning the found product
      return res.status(200).json({
        status: "success",
        message: "Product is fetched successfully",
        data: product,
      });
    } else {
      const products = await Product.find({});
      // returning all the products
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
