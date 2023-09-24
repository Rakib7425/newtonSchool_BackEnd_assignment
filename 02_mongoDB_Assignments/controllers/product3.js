const Product = require("../models/productModel");
/*
-The product search should be performed using the Product model, which should be imported before the function.
The search should return a JSON response with a status code of 200 and the following format:
{
    "status": "success",
    "data": {
        "count": <total number of products matching the search criteria>,
        "products": <an array of product objects matching the search criteria>
    }
}

If no products match the search criteria, return a JSON response with a status code of 404 and the following format:
{
    "message": "Products Not Found",
    "status": "Error",
    "error": <the error object>
}
*/

const searchProducts = async (req, res) => {
	try {
		// Write Your Code Here
		const products = await Product.find({});
		res.status(200).send({
			status: "success",
			data: {
				count: products.length,
				products: products,
			},
		});

		//
	} catch (err) {
		res.status(404).json({
			message: "Products Not Found",
			status: "Error",
			error: err,
		});
	}
};

/*
Implement a product retrieval functionality by ID for an e-commerce website.

Instructions:
The input for the product retrieval will be passed as a parameter in the request object.
The function should find a product in the database by its ID using the Product model, which should be imported before the function.
If the product with the given ID is not found, return a JSON response with a status code of 404 and the following format:
{
    "status": "Error",
    "message": "Product Not Found",
}
If the product is found, return a JSON response with a status code of 200 and the following format:
{
    "status": "success",
    "data": {
        "product": <the product object>
    }
}
Handle any errors that may occur during the retrieval and return a JSON response with a status code of 400 and the following format:
{
    "message": "Product Fetching Failed",
    "status": "Error",
    "error": <the error object>
}
*/
const getProductByID = async (req, res) => {
	try {
		// Write Your Code Here
		const product = await Product.findById(req.params.id);
		res.send({
			status: "success",
			data: {
				product,
			},
		});

		//
	} catch (err) {
		res.status(400).json({
			message: "Product Fetching Failed",
			status: "Error",
			error: err,
		});
	}
};

/*
Implement a product creation functionality for an e-commerce website.

Instructions:

The input for the product creation will be passed in the request body as a JSON object.
The function should extract the product details from the request body including name, description, price, and category.
Check if all the required fields are present in the request body, if not return a JSON response with a status code of 400 and a message indicating which field is missing.
If all the required fields are present, create a new Product object using the Product model, which should be imported before the function, and save it to the database.
If the product is saved successfully, return a JSON response with a status code of 201 and the following format:
{
    "status": "success",
    "data": {
        "product": <the newly created product object>
    }
}
Handle any errors that may occur during the creation and return a JSON response with a status code of 400 and the following format:
{
    "message": "Product Creation Failed",
    "status": "Error",
    "error": <the error object>
}
*/
const createProduct = async (req, res) => {
	try {
		// Write Your Code Here]o

		const product = new Product(req.body);
		// const newProduct = product.insertOne(red.body);
		const newProduct = await product.save();
		// console.log(newProduct);

		res.send({
			status: "success",
			data: {
				product: newProduct,
			},
		});

		//
	} catch (err) {
		res.status(400).json({
			message: "Product Creation Failed",
			status: "Error",
			error: err,
		});
	}
};

/*
Updated product details with the given ID
Instructions:
This function should update a product with the provided ID using the data provided in the request body.
The updated data should be passed as a JSON object in the following format:
{
    "updatedData": {
    "name": <string>,
    "description": <string>,
    "price": <number>,
    "category": <string>
    }
}
The updated data should be used to update the corresponding product in the database using the Product model, which should be imported before the function.
If the product is successfully updated, the function should return a JSON response with a status code of 200 and the following format:
{
    "status": "success",
    "message": "Product Updated Successfully",
    "data": {
        "updatedProduct": <an object representing the updated product>
    }
}
If the product with the provided ID is not found, the function should return a JSON response with a status code of 404 and the following format:
{
    "message": "Product Not Found",
    "status": "Error"
}
If there is any error while updating the product, the function should return a JSON response with a status code of 400 and the following format:
{
    "message": "Product Updation Failed",
    "status": "Error",
    "error": <the error object>
}
*/
const updateProduct = async (req, res) => {
	try {
		// Write Your Code Here
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
	} catch (err) {
		// console.log(err);
		res.status(400).json({
			message: "Product Updation Failed",
			status: "Error",
			error: err,
		});
	}
};

/*
The ID of the product to be deleted should be passed as a parameter in the request object.
The product should be deleted using the Product model, which should be imported before the function.
If the product is found and deleted successfully, return a JSON response with a status code of 200 and the following format:
{
"status": "success",
"data": null,
"message": "Product {product._id} deleted successfully"
}

If the product is not found, return a JSON response with a status code of 404 and the following format:
{
"status": "Error",
"message": "Product Not Found"
}

If an error occurs during the deletion process, return a JSON response with a status code of 400 and the following format:
{
"status": "Error",
"message": <error message>
}
*/
const deleteProduct = async (req, res) => {
	try {
		// Write Your Code Here

		const deletedProduct = await Product.findByIdAndDelete(req.params.id);
		// console.log(deletedProduct);

		res.status(200).send({
			status: "success",
			data: null,
			message: `Product ${deletedProduct._id} deleted successfully`,
		});

		//
	} catch (err) {
		res.status(400).json({
			status: "Error",
			message: err.message,
		});
	}
};

module.exports = { searchProducts, getProductByID, createProduct, updateProduct, deleteProduct };
