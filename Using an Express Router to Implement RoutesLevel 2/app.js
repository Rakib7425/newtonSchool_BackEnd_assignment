//Aim:Write a code to Update a product using Patch Request and  to delete a product using DELETE request

const fs = require("fs");
const express = require("express");
const { object } = require("joi");
const app = express();
const router = new express.Router();
const bodyParser = require("body-parser");

//middleware
router.use(express.json());
router.use(bodyParser.json());

const product = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/product.json`));

async function saveDataToDatabase(data) {
	return new Promise((resolve, reject) => {
		const jsonData = JSON.stringify(data);

		fs.writeFile(`${__dirname}/dev-data/product.json`, jsonData, (err) => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
}
// Defining The Router
// Handling PATCH request
router.patch("/api/v1/product/:id", (req, res) => {
	try {
		//Write your code here
		const { id } = req.params;
		let dbData = product.find((item) => Number(item.id) === Number(id));
		// console.log(dbData);

		const body = req.body;
		if (!!dbData) {
			const newTitle = body.title;
			const newPrice = body.price;
			dbData.title = newTitle;
			dbData.price = newPrice;
			// console.log(product);
			saveDataToDatabase(product);

			res.status(201).send({
				message: "success",
				data: {
					product,
				},
			});
		} else {
			res.status(404).send({
				message: "Product Not Found",
				status: "Error",
			});
		}
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: "Product Updation Failed",
			status: "Error",
		});
	}
});

//Deleting Product
router.delete("/api/v1/product/:id", (req, res) => {
	try {
		//Write your code here
		const { id } = req.params;
		let index = -1;
		let dbData = product.find((item, idx) => {
			index = idx;
			return Number(item.id) === Number(id);
		});
		// console.log(dbData);

		if (!!dbData) {
			// const index = product.findIndex((item) => Number(item.id) === Number(id));
			// console.log(product);

			product.splice(index, 1);
			// console.log(index);

			saveDataToDatabase(product);

			res.status(201).send({
				status: "success",
				message: "success",
				data: {
					product,
				},
			});
		} else {
			res.status(404).send({
				message: "Product Not Found",
				status: "Error",
			});
		}
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: "Product Deletion Failed",
			status: "Error",
		});
	}
});

//Registering our Router
app.use(router);

module.exports = app;
