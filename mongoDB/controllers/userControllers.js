const User = require("../models/userModel");

const registerUser = async (req, res) => {
	try {
		const { username, email, password } = req.body;
		// console.log(username, email, password);

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
		res.status(200).json({
			status: "success",
			data: {
				users,
			},
		});
	} catch (error) {
		res.send(error);
	}
};
//

const getUser = async (req, res) => {
	try {
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
		res.send(error);
	}
};

module.exports = {
	registerUser,
	getAllUsers,
	getUser,
};
