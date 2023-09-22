// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
	try {
		const { username, email, password } = req.body;
		console.log(username, email, password);

		if (username && email && password) {
			const newUser = new User({ username, email, password });
			const dbResponse = await newUser.save();
			res.status(201).send({ message: "User created successfully", data: dbResponse });
		} else {
			res.status(400).send({
				message: " All  fields are mandatory. (username, email and password)",
			});
		}
	} catch (error) {
		res.status(500).send({
			message: "Error occurred",
			error,
		});
	}
});

router.get("/getAllUsers", async (req, res) => {
	try {
		// userControllers.getAllUsers;
		const users = await User.find({});
		res.status(200).json({
			status: "success",
			data: {
				users,
			},
		});
	} catch (error) {
		console.error(error);
		res.status(400).send({ error: "Server error" });
	}
});

module.exports = router;