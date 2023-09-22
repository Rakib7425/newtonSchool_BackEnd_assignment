// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");
// const productControllers = require("../controllers/productControllers");

router.get("/product/:productId", async (req, res) => {
	try {
		const { productId } = req.params;
		let paramId = Number(productId);

		const dbResponse = await Product.find({ id: paramId });
		// console.log(dbResponse);

		if (dbResponse.length < 1) {
			res.status(404).send({
				message: "invalid product id.",
				data: "data not found.",
			});
		} else {
			res.send({
				message: "data fetched successfully.",
				data: dbResponse,
			});
		}
	} catch (error) {
		res.status(500).send({
			error,
		});
	}
});

router.get("/getAllProducts", async (req, res) => {
	try {
		// console.log("getAllProducts route accessed");

		const dbResponse = await Product.find({});

		res.status(200).send({
			message: "Products fetched successfully",
			totalResults: dbResponse.length,
			data: dbResponse,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			error,
			rr: "hello",
		});
	}
});

router.post("/addProduct", async (req, res) => {
	try {
		const lastProduct = await Product.findOne({}).sort({ id: -1 });
		let bodyId = req.body.id;
		let newId;
		// console.log(lastProduct);
		if (bodyId) {
			console.log(bodyId);
			if (await Product.findOne({ id: bodyId })) {
				newId = bodyId;
			}
		} else {
			newId = lastProduct.id + 1;
		}
		const body = {
			id: newId,
			...req.body,
		};
		const products = new Product(body);
		const dbResponse = await products.save();

		res.status(200).send({
			// newId,
			message: "data saved  successfully.",
			data: dbResponse,
		});

		console.log(newId);
		//
	} catch (error) {
		// console.log(error);
		res.status(500).send({
			message: "id is not mandatory",
			error,
		});
	}
});

module.exports = router;
