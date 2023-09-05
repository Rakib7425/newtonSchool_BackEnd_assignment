const fs = require("fs");
const express = require("express");
const app = express();

// Importing productNames from names.json file
const productNames = JSON.parse(fs.readFileSync(`${__dirname}/data/names.json`));

//Middleware
app.use(express.json());

// GET endpoint for sending the products to client by id
//Endpoint - /api/v1/names/:id
app.get("/api/v1/names/:id", (req, res) => {
	try {
		// const productNames = JSON.parse(fs.readFileSync(`${__dirname}/data/names.json`));
		// console.log(productNames[2]);

		// productNames.map((item) => {
		// 	console.log(item);
		// });

		const paramId = Number(req.params.id);
		const product = productNames.find((p) => p.id === paramId);
		// console.log(paramId);

		if (typeof paramId !== "number") {
			return res.status(400).json({ error: "Invalid product id types" });
		}

		if (!product) {
			return res.status(404).json({ status: "failed", message: "Not found!" });
		} else if (product) {
			// const productName = product.name;
			res.status(200).json({
				status: "success",
				message: "Product Name fetched successfully",
				data: {
					[product.name]: product,
					// product.name: product,
				},
			});
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});

module.exports = app;

/**
 * const productId = parseInt(req.params.id);

		// Find the product by ID
		const product = productNames.find((p) => p.id === productId);

		if (product) {
			// Object found, return with a status code of 200
			res.status(200).json({
				status: "success",
				message: "Product Name fetched successfully",
				data: {
					id: product.id,
					name: product.name,
				},
			});
		} else {
			// Object not found, return with a status code of 404
			res.status(404).json({
				status: "failure",
				message: "Not found!",
			});
		}
 */
