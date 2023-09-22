const User = require("../models/userModel");

const registerUser = async (req, res) => {
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
		console.error(error);
		res.status(400).json({ message: "Bad request", duplicateUser: error.keyValue });
	}
};
const getAllUsers = async (req, res) => {
	try {
		const users = await User.find({});
		res.status(201).json({
			status: "success",
			data: {
				users,
			},
		});
	} catch (error) {
		res.send(error);
	}
};
module.exports = {
	registerUser,
	getAllUsers,
};
