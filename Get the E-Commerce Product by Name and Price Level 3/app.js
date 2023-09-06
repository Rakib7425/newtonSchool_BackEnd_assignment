const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// Middlewares
app.use(express.json());

// Write GET endpoint for sending product to the client here
// Endpoint - /api/v1/products/:name/:price

/* The code block you provided is defining a GET endpoint in an Express.js application. */

app.get("/api/v1/products/:name/:price", (req, res) => {
	let { price } = req.params;
	let { name } = req.params;
	const product = products.find((p) => p.price == price && p.name == name);

	if (!product) {
		return res.status(404).send({ status: "failed", message: "Product not found!" });
	} else {
		res.status(200).send({
			status: "success",
			message: "Product fetched successfully",
			data: {
				product,
			},
		});
	}
});
module.exports = app;
