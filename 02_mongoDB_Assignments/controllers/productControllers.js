/* Product Controllers */

const Product = require("../models/productModel");

// Updates product details with the given ID
/*
Problem statement: You need to implement a controller that updates product data using the Update First approach. This controller should take the ID of the product to be updated as a parameter and the updated data as the request body. It should then search for the product with the given ID, update it with the new data, and save the changes to the database.

Inputs:

req.params.id: ID of the product to be updated
req.body.updatedData: object containing the updated product data
Outputs:

If the product is found and updated successfully, the controller should return a 200 status code with the following JSON response:
{
    "status": "success",
    "message": "Product Updated Successfully",
    "data": {
        "updatedProduct": [updated product object]
    }
}
If the product with the given ID is not found, the controller should return a 404 status code with the following JSON response:
{
    "message": "Product Not Found",
    "status": "Error"
}
If there is an error while updating the product, the controller should return a 400 status code with the following JSON response:
{
    "message": "Product Updation Failed",
    "status": "Error",
    "error": [error message]
}
*/

const updateProduct = async (req, res) => {
	try {
		// Write your code here
		const productId = req.params.id;
		const updatedData = req.body.updatedData;

		const product = await Product.findByIdAndUpdate(productId, updatedData, {
			new: true,
		});
		// console.log(product);

		if (!product) {
			return res.status(404).json({
				message: "Product Not Found",
				status: "Error",
			});
		}

		const updatedProduct = await Product.findById(productId);
		res.status(200).json({
			status: "success",
			message: "Product Updated Successfully",
			data: {
				updatedProduct,
			},
		});

		//
	} catch (err) {
		res.status(400).json({
			message: "Product Updation Failed",
			status: "Error",
			error: err,
		});
	}
};

// Fetches the product with the given ID
const getProductByID = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		if (!product) {
			return res.status(404).json({
				status: "Error",
				message: "Product Not Found",
			});
		}
		res.status(200).json({
			status: "success",
			data: {
				product,
			},
		});
	} catch (err) {
		res.status(400).json({
			message: "Product Fetching Failed",
			status: "Error",
			error: err,
		});
	}
};

// Creates a new product
const createProduct = async (req, res) => {
	try {
		const { name, description, price, category } = req.body;

		if (!name) {
			return res.status(400).json({
				message: "Name Missing",
				status: "Error",
			});
		}
		if (!description) {
			return res.status(400).json({
				message: "Description Missing",
				status: "Error",
			});
		}
		if (!price) {
			return res.status(400).json({
				message: "Price Missing",
				status: "Error",
			});
		}
		if (!category) {
			return res.status(400).json({
				message: "Category Missing",
				status: "Error",
			});
		}

		const new_product = new Product({ name, description, price, category });
		await new_product.save();

		res.status(201).json({
			status: "success",
			data: {
				product: new_product,
			},
		});
	} catch (err) {
		res.status(400).json({
			message: "Product Creation Failed",
			status: "Error",
			error: err,
		});
	}
};

// Deletes the product with the given ID.
const deleteProduct = async (req, res) => {
	try {
		const product = await Product.findByIdAndDelete(req.params.id);
		if (!product) {
			return res.status(404).json({
				status: "Error",
				message: "Product Not Found",
			});
		}
		res.status(200).json({
			status: "success",
			data: null,
			message: `Product {product._id} deleted successfully`,
		});
	} catch (err) {
		res.status(400).json({
			status: "Error",
			message: err.message,
		});
	}
};

module.exports = { getProductByID, createProduct, updateProduct, deleteProduct };
