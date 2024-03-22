const mongoose = require(`mongoose`);

const MONGO_DB_URL = process.env.MONGO_DB_URL;

// Define an async function
(async () => {
  try {
    // Use await when connecting to the database
    await mongoose.connect(MONGO_DB_URL);
    console.log("Database connected successfully");
  } catch (err) {
    console.log("error in DB Connection", err.message);
  }
})(); // IFFY

// Export the async function
module.exports = mongoose;
