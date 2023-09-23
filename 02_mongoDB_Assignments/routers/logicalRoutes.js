//Logical Operator are:or,and,not,nor
// $and:Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
// $not:Inverts the effect of a query expression and returns documents that do not match the query expression.
// $nor:Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
// $or:Joins query clauses with a logical OR returns all documents that match the conditions of either clause.

const router = require("express").Router();
const User = require("../models/userModel");

//will return those user whose age is 20 or username is admin
router.get("/or", async (req, res) => {
	try {
		//write your code here for or operator
		const user = await User.find({
			$or: [{ age: 20 }, { username: "admin" }],
		});
		//
		res.status(200).send(user);
	} catch (error) {
		res.status(404).send(error);
	}
});

//will return those users whose age is 20 and username is admin
router.get("/and", async (req, res) => {
	try {
		//write your code here for and operator
		const user = await User.find({
			$and: [{ age: 20 }, { username: "admin" }],
		});
		//
		res.status(200).send(user);
		//
	} catch (error) {
		res.status(404).send(error);
	}
});

//It will give all the users that's age is not greater than 20. Basically it will return the users which has a age less than 20
router.get("/not", async (req, res) => {
	try {
		//write your code here for not operator
		const user = await User.find({ age: { $lt: 20 } });
		//
		res.status(200).send(user);
		//
	} catch (error) {
		res.status(404).send(error);
	}
});

//It will return all the users except those users whose age is either 20 or the username is admin
router.get("/nor", async (req, res) => {
	try {
		//write your code here for nor operator
		const user = await User.find({
			$nor: [{ age: 20 }, { username: "admin" }],
		});
		//
		res.status(200).send(user);
		//
	} catch (error) {
		res.status(404).send(error);
	}
});
module.exports = router;
