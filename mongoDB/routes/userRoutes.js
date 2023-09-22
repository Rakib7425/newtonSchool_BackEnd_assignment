const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const userControllers = require("../controllers/userControllers");

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
		userControllers.getAllUsers(req, res);
	} catch (error) {
		console.error(error);
		res.status(400).send({ error: "Server error" });
	}
});

router.get("/user/:userId", async (req, res) => {
	try {
		// userControllers.getAllUsers;
		const { userId } = req.params;

		const dbResponse = await User.findOne({ _id: userId });

		if (!dbResponse) {
			return res.status(404).json({
				message: `no user found, id : ${userId}`,
				status: "not found",
			});
		}
		res.status(200).json({
			status: "success",
			data: {
				user: dbResponse,
			},
		});
	} catch (error) {
		// console.error(error);
		res.status(400).send({
			message: "Server error",
			error,
		});
	}
});
module.exports = router;
