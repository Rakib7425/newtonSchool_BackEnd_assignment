// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");
// const productControllers = require("../controllers/productControllers");

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		let paramId = Number(id);

		// console.log(typeof paramId);

		const dbResponse = await Product.findOne({ id: paramId });

		if (dbResponse.length < 1) {
			return res.status(404).send({
				message: "data not found.",
			});
		}

		res.send({
			message: "data fetched successfully.",
			data: dbResponse,
		});
	} catch (error) {
		res.status(500).send({
			error,
		});
	}
});

router.get("/getAllProducts", async (req, res) => {
	try {
		const dbResponse = await Product.find({});
		res.status(200).send({
			message: "Products fetched successfully",
			data: dbResponse,
		});

		//
	} catch (error) {
		console.log(error);
		res.status(500).send({
			error,
		});
	}
});

router.post("/addProduct", async (req, res) => {
	try {
		const lastProduct = await Product.findOne({}).sort({ id: -1 });

		console.log(lastProduct);

		let newId = lastProduct.id + 1;
		console.log(newId);

		const body = {
			id: newId,
			...req.body,
		};

		const products = new Product(body);
		const dbResponse = await products.save();
		//
		res.status(200).send({
			// newId,
			message: "data saved  successfully.",
			data: dbResponse,
		});
	} catch (error) {
		// console.log(error);
		res.status(500).send({
			error,
		});
	}
});

module.exports = router;
