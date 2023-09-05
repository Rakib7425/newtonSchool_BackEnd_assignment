const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Write POST endpoint to get the sum of two number
app.post("/add", (req, res) => {
	try {
		const { num1, num2 } = req.body;
		if (typeof num1 !== "number" || typeof num2 !== "number") {
			return res.status(400).json({ error: "Invalid data types" });
		}
		const sum = num1 + num2;
		// console.log(num1, num2, sum);
		res.status(200).json({ result: sum });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});

//Write POST endpoint to get the difference of two number
app.post("/subtract", (req, res) => {
	try {
		const { num1, num2 } = req.body;
		if (typeof num1 !== "number" || typeof num2 !== "number") {
			return res.status(400).json({ error: "Invalid data types" });
		}
		const result = num1 - num2;
		// console.log(num1, num2, result);
		res.status(200).json({ result: result });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});

//Write POST endpoint to get the multiplication of two number
app.post("/multiply", (req, res) => {
	try {
		const { num1, num2 } = req.body;
		if (typeof num1 !== "number" || typeof num2 !== "number") {
			return res.status(400).json({ error: "Invalid data types" });
		}
		const result = num1 * num2;
		// console.log(num1, num2, result);
		res.status(200).json({ result: result });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});
//Write POST endpoint to check if the num2 is 0 or not and to get the result after dividing two number
app.post("/divide", (req, res) => {
	try {
		const { num1, num2 } = req.body;
		if (typeof num1 !== "number" || typeof num2 !== "number") {
			return res.status(400).json({ error: "Invalid data types" });
		} else if (num2 === Number(0)) {
			res.status(400).json({ error: "Cannot divide by zero" });
		} else {
			const result = num1 / num2;
			// console.log(num1, num2, result);
			res.status(200).json({ result: result });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});

const server = app.listen(8082, () => {
	console.log(`Server running on http://localhost:8082`);
});

module.exports = app;
