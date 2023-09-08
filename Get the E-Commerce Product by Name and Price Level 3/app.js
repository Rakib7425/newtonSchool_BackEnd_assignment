const fs = require("fs");
const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// Middleware
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

// !Qn. https://my.newtonschool.co/playground/project/lai717v8ze3q
// Get All E-Commerce Products: Level - 1 - Explanation with Example, Building RESTful API's Using Express

app.get("/api/v1/products", (req, res) => {
	try {
		let dd = products;
		console.log(typeof dd);

		const isProduct = products.length > 0 && typeof products === "object";
		if (isProduct) {
			res.status(200).send({
				status: "success",
				message: "Product fetched successfully",
				data: {
					products,
				},
			});
		} else {
			// console.log("status - success");
			return res.status(404).send({ status: "failed", message: "Product not found!" });
		}
	} catch (error) {
		console.log(error);
	}
});

app.get("/api/get-env", (req, res) => {
	const envNum = process.env.NUMBER;
	try {
		console.log(envNum);
		if (envNum) {
			res.status(200).send({
				number: envNum,
			});
		} else {
			res.status(404).send({
				err: "Not Found",
			});
		}
	} catch (error) {
		res.status(500).json({ err: "Internal Server Error" });
		console.log(error);
	}
});

module.exports = app;
