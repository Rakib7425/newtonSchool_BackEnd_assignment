const Product = require("../models/productModel");

const getProducts = async (req, res) => {
	try {
		const dbResponse = await Product.find({});
		// return dbResponse;
		res.status(200).send({
			data: dbResponse,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			error,
		});
	}
};

module.exports = {
	getProducts,
};
