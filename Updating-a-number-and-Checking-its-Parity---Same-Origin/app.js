const express = require("express");
const app = express();

app.use(express.json());

function add2(req, res, next) {
	const { num } = req.query;

	if (num === undefined || isNaN(num)) {
		return res.status(400).send({ error: "Invalid 'num' parameter" });
	}

	req.num = Number(num) + 2;
	next();
}

function CheckisOdd(req, res, next) {
	const { num } = req.query;

	if (num % 2 === 0) {
		req.isOdd = false;
	} else {
		req.isOdd = true;
	}

	next();
}

app.get("/", add2, CheckisOdd, (req, res) => {
	const { num, isOdd } = req;

	res.status(200).send({
		num: num,
		isOdd: isOdd,
	});
});

module.exports = app;
