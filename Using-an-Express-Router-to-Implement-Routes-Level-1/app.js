const fs = require("fs");
const express = require("express");
const router = express.Router();

//Including product.json file
const product = JSON.parse(fs.readFileSync(`${__dirname}/product.json`));

// Defining The Router
// Get all the products
router.get("/api/v1/product", (req, res) => {
	try {
		//Write your code here
		res.status(200).send({
			status: "success",
			results: product.length,
			data: {
				product,
			},
		});
	} catch (error) {
		res.status(400).json(error);
	}
});

async function saveDataToDatabase(data) {
	return new Promise((resolve, reject) => {
		const jsonData = JSON.stringify(data);

		fs.writeFile("./product.json", jsonData, (err) => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
}

//Create a new Product
router.post("/api/v1/product", (req, res) => {
	try {
		//Write your code here
		let length = product.length;
		let lastProduct = product[length - 1];
		let newId = lastProduct.id + 1;
		let { title, price } = req.body;
		// console.log(newId, lastProduct);

		const newProduct = {
			id: newId,
			title,
			price,
		};

		product.push(newProduct);

		const fulfilled = saveDataToDatabase(product);
		if (!title || !price) {
			res.status(404).send({
				message: "Title and price are required",
				status: "Error",
			});
		} else if (!fulfilled) {
			res.status(400).send({
				message: "Error creating product",
				status: "Error",
			});
		} else {
			res.status(200).send({
				status: "success",
				data: {
					product: newProduct,
				},
			});
		}
	} catch (error) {
		res.status(400).send({
			message: "Error creating product",
			status: "Error",
		});
	}
});

module.exports = router;
