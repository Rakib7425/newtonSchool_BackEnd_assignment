const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from userDetails.json file
const userDetails = JSON.parse(fs.readFileSync(`${__dirname}/data/userDetails.json`));

//Middlewares
app.use(express.json());

//Write DELETE endpoint for deleting the details of user

app.delete("/api/v1/details/:id", (req, res) => {
	let id = req.params.id;
	id *= 1;
	const details = userDetails.find((user) => user.id === id);
	const userIndex = userDetails.indexOf(details);

	if (!details) {
		return res.status(404).send({
			status: "failed",
			message: "User not found!",
		});
	}
	console.log(details);

	if (userIndex !== -1) {
		const removedUser = userDetails.splice(userIndex, 1);

		if (removedUser.length > 0) {
			fs.writeFile(
				`${__dirname}/data/userDetails.json`,
				JSON.stringify(userDetails),
				(err) => {
					if (err) {
						return res.status(500).send({
							status: "error",
							message: "Unable to delete user details",
						});
					}
					res.status(200).send({
						status: "Success",
						message: "User details deleted successfully",
						data: {
							details: removedUser[0], // Send the removed user details in the response
						},
					});
				}
			);
		} else {
			res.status(500).send({
				status: "error",
				message: "Unable to delete user details",
			});
		}
	}
});

// app.delete("/api/v1/detailss/:id", (req, res) => {
// 	let id = req.params.id;
// 	id *= 1;
// 	const details = userDetails.find((user) => user.id === id);
// 	const userIndex = userDetails.indexOf(details);

// 	if (!details) {
// 		return res.status(404).send({
// 			status: "failed",
// 			message: "User not found!",
// 		});
// 	}
// 	console.log(details);

// 	if (userIndex) {
// 		const remove = userDetails.splice(userIndex, 1);
// 		console.log(userDetails);
// 		console.log(remove);
// 		fs.writeFile(`${__dirname}/data/userDetails.json`, JSON.stringify(userDetails), (err) => {
// 			res.status(201).send({
// 				status: "Success",
// 				message: "User details deleted successfully",
// 				data: {
// 					details: remove[0],
// 				},
// 			});
// 		});
// 	}
// });

// PATCH endpoint for editing user details
app.patch("/api/v1/details/:id", (req, res) => {
	const id = req.params.id * 1;
	const updatedDetails = userDetails.find((updatedDetails) => updatedDetails.id === id);
	const index = userDetails.indexOf(updatedDetails);

	if (!updatedDetails) {
		return res.status(404).send({
			status: "failed",
			message: "User not found!",
		});
	}

	Object.assign(updatedDetails, req.body);

	fs.writeFile(`${__dirname}/data/userDetails.json`, JSON.stringify(userDetails), (err) => {
		res.status(200).json({
			status: "success",
			message: `User details updated successfully for id: ${updatedDetails.id}`,
			data: {
				updatedDetails,
			},
		});
	});
});

// Write PATCH endpoint to buy a product for the client here
// Endpoint /api/v1/products/:id

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

app.patch("/api/v1/products/:id", (req, res) => {
	try {
		const id = req.params.id * 1;
		// console.log(products);
		const product = products.find((item) => item.id === id);
		// console.log(id, product);

		if (product && product.quantity > 0) {
			const quantity = product.quantity;
			// const updatedData = product.quantity - 1;

			product.quantity -= 1;

			fs.writeFile(`${__dirname}/data/products.json`, JSON.stringify(products), (err) => {
				res.status(200).send({
					status: "success",
					message: `Thank you for purchasing ${product.name}`,

					product,
				});
			});

			console.log(quantity);
		} else if (product && product.quantity <= 0) {
			res.status(404).send({
				status: "success",
				message: `${product.name}, Out of stock!`,
			});
		} else {
			res.status(404).send({
				status: "failed",
				message: "Product not found!",
			});
		}
	} catch (err) {
		// console.log(err);
		res.status(500).send({
			status: "error",
			message: "Unable to process the request",
		});
	}
});

//
// POST endpoint for registering new user
app.post("/api/v1/details", (req, res) => {
	const newId = userDetails[userDetails.length - 1].id + 1;
	const { name, mail, number } = req.body;
	const newUser = { id: newId, name, mail, number };
	userDetails.push(newUser);
	fs.writeFile(`${__dirname}/data/userDetails.json`, JSON.stringify(userDetails), (err) => {
		res.status(201).json({
			status: "Success",
			message: "User registered successfully",
			data: {
				userDetails: newUser,
			},
		});
	});
});

// GET endpoint for sending the details of users
app.get("/api/v1/details", (req, res) => {
	res.status(200).json({
		status: "Success",
		message: "Detail of users fetched successfully",
		data: {
			userDetails,
		},
	});
});

// GET endpoint for sending the details of users by id
app.get("/api/v1/userdetails/:id", (req, res) => {
	let { id } = req.params;
	id *= 1;
	const details = userDetails.find((details) => details.id === id);
	if (!details) {
		return res.status(404).send({
			status: "failed",
			message: "User not found!",
		});
	} else {
		res.status(200).send({
			status: "success",
			message: "Details of users fetched successfully",
			data: {
				details,
			},
		});
	}
});

module.exports = app;
