const mongoose = require("mongoose");
// {
// 	"username":"RsM",
// 	"email":"abc@abc.com",
// 	"password":"abc"
// }

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

const User = mongoose.model("users", userSchema);

module.exports = User;
