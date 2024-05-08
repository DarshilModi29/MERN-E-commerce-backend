const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT;
const fetchProducts = require("./src/routers/fetchProducts");
const paymentRouter = require("./src/routers/payment");
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(fetchProducts);
app.use(paymentRouter);
mongoose.connect(process.env.HOST)
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((err) => {
        console.log(err);
    })

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});