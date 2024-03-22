

const {
  createProduct,
  updateProduct,
  deleteProduct,
  findProduct,
} = require("../../server/controllers/productController");
const Product = require("../../server/models/productModel");

const request = require("supertest");
const app = require("../../server");
const mongoose = require( "mongoose" );
const testProductData = {
  name: "Test Product",
  catagory: "Test Catagory",
  price: 10.99,
  quantity: 10,
  description: "This is a test product",
};

describe("createProduct", () => {
  it("should create a new product with valid data", async () => {
    const res = await request(app)
      .post("/api/products")
      .send(testProductData)
      .expect(201);

    expect(res.body.status).toBe("success");
    expect(res.body.data).toHaveProperty("name", testProductData.name);
    expect(res.body.data).toHaveProperty("catagory", testProductData.catagory);
    expect(res.body.data).toHaveProperty("price", testProductData.price);
    expect(res.body.data).toHaveProperty("quantity", testProductData.quantity);

    const product = await Product.findOne({ name: testProductData.name });
    expect(product).not.toBeNull();
    await Product.deleteOne(testProductData)
    
  });

  it("should return a 400 error with missing data", async () => {
    const res = await request(app).post("/api/products").send({}).expect(400);

    expect(res.body.status).toBe("failed");
    expect(res.body.message).toBe("All fields are required");
  });
});


describe("updateProduct", () => {
  it("should update an existing product with valid data", async () => {
    // const createdProduct = await createProduct(testProductData);

    let res = await request(app)
      .post("/api/products")
      .send(testProductData)
      .expect(201);

    
    const createdProduct = await Product.findOne({ name: testProductData.name });

    
    const updatedData = {
      name: "Updated Test Product",
      catagory: "Updated Test Catagory",
      price: 11.99,
      quantity: 11,
      description: "This is an updated test product",
    };

     res = await request(app)
      .put(`/api/products/${createdProduct._id}`)
      .send(updatedData)
      .expect(200);

    expect(res.body.status).toBe("success");
    expect(res.body.message).toBe("Product is updated");
    expect(res.body.data).toHaveProperty("name", updatedData.name);
    expect(res.body.data).toHaveProperty("catagory", updatedData.catagory);
    expect(res.body.data).toHaveProperty("price", updatedData.price);
    expect(res.body.data).toHaveProperty("quantity", updatedData.quantity);

    const updatedProduct = await Product.findById(createdProduct._id);
    expect(updatedProduct).not.toBeNull();
    expect(updatedProduct.name).toBe(updatedData.name);
    expect(updatedProduct.price).toBe(updatedData.price);
    expect(updatedProduct.quantity).toBe(updatedData.quantity);

    await Product.findByIdAndDelete(createdProduct._id)
  });

  it("should return a 404 error with invalid product ID", async () => {
    const invalidId = "123456789012345678";
    const res = await request(app)
      .put(`/api/products/${invalidId}`)
      .send(testProductData)
      .expect(404);

    expect(res.body.status).toBe("failed");
    expect(res.body.message).toBe(`No product with the given ID was found.`);
  });

 
});


describe("deleteProduct", () => {
  it("should delete an existing product and return valid data", async () => {
    // const createdProduct = await createProduct(testProductData);

    let res = await request(app)
      .post("/api/products")
      .send(testProductData)
      .expect(201);

    
    const createdProduct = await Product.findOne({ name: testProductData.name });

    
    
    // await Product.findByIdAndDelete(createdProduct._id)

     res = await request(app)
     .delete(`/api/products/${createdProduct._id}`)
     .send({})
     .expect(200);
     

    expect(res.body.status).toBe("success");
    expect(res.body.message).toBe("Product has been deleted");
    expect(res.body.data).toHaveProperty("name", testProductData.name);
    expect(res.body.data).toHaveProperty("catagory", testProductData.catagory);
    expect(res.body.data).toHaveProperty("price", testProductData.price);
    expect(res.body.data).toHaveProperty("quantity", testProductData.quantity);

    

  });

  it("should return a 404 error with invalid product ID", async () => {
    const invalidId = "123456789012345678";
    const res = await request(app)
      .put(`/api/products/${invalidId}`)
      .send(testProductData)
      .expect(404);

    expect(res.body.status).toBe("failed");
    expect(res.body.message).toBe(`No product with the given ID was found.`);
  });

 
});


describe("findProduct", () => {
  it("should get an existing product and return valid data", async () => {
    // const createdProduct = await createProduct(testProductData);

    let res = await request(app)
      .post("/api/products")
      .send(testProductData)
      .expect(201);

    
    const createdProduct = await Product.findOne({ name: testProductData.name });

    // await Product.findByIdAndDelete(createdProduct._id)

     res = await request(app)
     .get(`/api/products/${createdProduct._id}`)
     .send({})
     .expect(200);
     

    expect(res.body.status).toBe("success");
    expect(res.body.message).toBe("Product is fetched successfully");
    expect(res.body.data).toHaveProperty("name", testProductData.name);
    expect(res.body.data).toHaveProperty("catagory", testProductData.catagory);
    expect(res.body.data).toHaveProperty("price", testProductData.price);
    expect(res.body.data).toHaveProperty("quantity", testProductData.quantity);

    await Product.findByIdAndDelete(createdProduct._id)

  });

  it("should return a 404 error with invalid product ID", async () => {
    const invalidId = "123456789012345678";
    const res = await request(app)
      .put(`/api/products/${invalidId}`)
      .send(testProductData)
      .expect(404);

    expect(res.body.status).toBe("failed");
    expect(res.body.message).toBe(`No product with the given ID was found.`);
  });

 
});

beforeAll(done => {
  done()
})

afterAll(done => {
  // Closing the DB connection allows Jest to exit successfully.
  
  mongoose.connection.close();
  
  done()
})


