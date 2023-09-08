const express = require("express");
const app = express();

app.get("/product/:productId", (req, res) => {
	//Write a code here for endpoint /product/:productId and also print parameter in json form
	const productId = req.params.productId;
	res.status(200).json({ productId });
});

// Defining a route with a parameter for User - Explanation with Example, Building RESTful API's Using Express - CRUD for ECommerce
// https://my.newtonschool.co/playground/project/hni2evz1wdv7

app.get("/user/:userId", (req, res) => {
	//Write a code here for endpoint /user/:userId and also print parameter in json form
	const userId = req.params.userId;
	res.status(200).json({ userId });
});

module.exports = app;
