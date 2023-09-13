const express = require("express");
const app = express();

app.use(express.json());

//Complete below given Middleware function which adds 2 to a number provided in api as params. Example is shown below

//Example:
// localhost:3000/?num=10 --> The router should return { num = 12 }

function add2(req, res, next) {
	const { num } = req.query;
	if (num === undefined || isNaN(num)) {
		return res.status(400).send({ error: "Invalid 'num' parameter" });
	}

	req.updatedNum = Number(num) + 2;

	next();
}

app.get("/", add2, (req, res) => {
	//num should be replaced by num+2 from the get request route
	const { updatedNum } = req;
	// Send the updated number in the response
	res.status(200).json({
		num: Number(updatedNum),
	});
});

module.exports = app;
