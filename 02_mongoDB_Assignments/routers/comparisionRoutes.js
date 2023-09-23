//eq,gt,gte,lt,lte,in
// $eq=Matches values that are equal to a specified value.
// $gt=Matches values that are greater than a specified value.
// $gte=Matches values that are greater than or equal to a specified value.
// $lt=Matches values that are less than a specified value.
// $lte=Matches values that are less than or equal to a specified value.
// $in=Matches any of the values specified in an array.

const router = require("express").Router();
const User = require("../models/userModel");

//  Will give a value which is qual to 20
router.get("/eq", async (req, res) => {
	try {
		//Write a code here for eq operator
		const user = await User.find({ age: { $eq: 20 } });
		res.status(200).send(user);
	} catch (error) {
		res.status(404).send(error);
	}
});
// Will give a value which has a age greater than 20
// Greater Than Symbol="$gt"
router.get("/gt", async (req, res) => {
	try {
		//Write a code here for gt operator
		const user = await User.find({ age: { $gt: 20 } });

		res.status(200).send(user);
	} catch (error) {
		res.status(404).send(error);
	}
});

// will give a age which is greater than or equal to 20
// Greater Than or equal to Symbol="$gte"
router.get("/gte", async (req, res) => {
	try {
		//Write a code here for gte operator
		const user = await User.find({ age: { $gte: 20 } });

		res.status(200).send(user);
	} catch (error) {
		res.status(404).send(error);
	}
});

//will give a age which is less than 20
// Less Than Symbol="$lt"
router.get("/lt", async (req, res) => {
	try {
		//Write a code here for lt operator
		const user = await User.find({ age: { $lt: 20 } });

		res.status(200).send(user);
	} catch (error) {
		res.status(404).send(error);
	}
});

//will give a age which is less than or equal to 20
// Less Than Equal To Symbol="$lte"
router.get("/lte", async (req, res) => {
	try {
		//Write a code here for lte operator
		const user = await User.find({ age: { $lte: 20 } });

		res.status(200).send(user);
	} catch (error) {
		res.status(404).send(error);
	}
});

//will return age which includes 20,25
//in symbol="$in"
router.get("/in", async (req, res) => {
	try {
		//Write a code here for in operator
		const user = await User.find({ age: { $in: [20, 25] } });

		res.status(200).send(user);
	} catch (error) {
		res.status(404).send(error);
	}
});

module.exports = router;
