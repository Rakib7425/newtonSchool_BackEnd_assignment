// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
	try {
		const { username, email, password } = req.body;
		// console.log(username, email, password);

		if (username && email && password) {
			const newUser = new User({ username, email, password });
			const dbResponse = await newUser.save();
			// console.log(dbResponse);
			res.status(201).send({ message: "User created successfully", data: dbResponse });
		} else {
			res.status(400).send({ message: "All  fields are mandatory. " });
		}
	} catch (error) {
		console.error(error);
		res.status(400).json({ error: "Bad request", duplicateData: error.keyValue });
	}
});

router.get("/getusers", async (req, res) => {
	try {
		const users = await User.find({});
		res.json(users);
	} catch (error) {
		console.error(error);
		res.status(400).send({ error: "Server error" });
	}
});

module.exports = router;
