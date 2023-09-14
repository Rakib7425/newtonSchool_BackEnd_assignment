const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		default: new Date().toLocaleString(),
	},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
