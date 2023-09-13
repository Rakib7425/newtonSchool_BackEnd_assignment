const fs = require("fs");
const express = require("express");
const app = express();
const router = new express.Router();

//middleware
router.use(express.json());

//Including product.json file
const product = JSON.parse(fs.readFileSync(`${__dirname}/product.json`));
// Defining The Router
// Get all the products
router.get("/api/v1/product", (req, res) => {
	try {
		res.status(200).json({
			status: "success",
			results: product.length,
			data: {
				product: product,
			},
		});
	} catch (error) {
		res.status(400).json(error);
	}
});
//Creating new Product
router.post("/api/v1/product", (req, res) => {
	try {
		const { title, price } = req.body;
		if (!title || !price) {
			// If either title or price is missing, send a single error response
			return res.status(404).json({
				message: "Title and price are required",
				status: "Error",
			});
		}
		const newId = product[product.length - 1].id + 1;
		const newProduct = { id: newId, title, price };
		product.push(newProduct);
		fs.writeFile(`${__dirname}/product.json`, JSON.stringify(product), (err) => {
			// If there is an error writing the file, send an error response
			if (err) {
				return res.status(500).json({
					message: "Error creating product",
					status: "Error",
				});
			}
			// Otherwise, send the success response
			res.status(201).json({
				status: "Success",
				data: {
					product: newProduct,
				},
			});
		});
	} catch (error) {
		// If there is an unhandled error, send an error response
		res.status(400).json({
			message: "Error creating product",
			status: "Error",
		});
	}
});

//Registering our Router
app.use(router);

module.exports = app;
