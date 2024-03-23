// Importing required modules
const dotenv = require("dotenv"); // for loading environment variables
dotenv.config(); // configuring dotenv

const morgan = require("morgan"); // for logging requests
const path = require('path'); // for handling file paths

const express = require(`express`); // for creating the web server
const app = express(); // creating an instance of express

// Importing product router
const productRouter = require('./server/routes/productRoutes');

// Importing and configuring the database
require('./dbConnection');

// Logging requests in a compact format
app.use(morgan("tiny"));

// Parsing incoming JSON and url-encoded data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Setting up the view engine to be EJS
app.set('view engine', 'ejs');
// app.set('views',path.resolve(__dirname,"views"));

// Using the product router
app.use('/',productRouter);

// Setting the port for the server to listen on
const PORT = process.env.PORT || 3001;

// Starting the server and listening on the specified port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Exporting the app object for use in other parts of the application
module.exports = app;