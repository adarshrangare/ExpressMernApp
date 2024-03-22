const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const path = require('path');

const express = require(`express`);
const app = express();

const productRouter = require('./server/routes/productRoutes')

// database
require('./dbConnection')

// log request
app.use(morgan("tiny"))


// parse Request
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// setting view Engine
app.set('view engine', 'ejs');
// app.set('views',path.resolve(__dirname,"views"));

// loading asests
app.use('/css', express.static(path.resolve(__dirname,"asests/css")))
app.use('/images', express.static(path.resolve(__dirname,"asests/images")))
app.use('/js', express.static(path.resolve(__dirname,"asests/js")))

app.use('/',productRouter)



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
