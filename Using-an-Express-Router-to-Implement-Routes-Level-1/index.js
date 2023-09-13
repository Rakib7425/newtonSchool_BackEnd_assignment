const express = require("express");
const app = express();

const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const productRoute = require("./app");

app.use(bodyParser.urlencoded({ extended: false }));

//Router Middlewares
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/v1/product", productRoute);

dotenv.config();

app.listen(3000, () => console.log("Server running......"));
