const express = require("express");
const app = express();

//Middlewares
app.use(express.json());

// Write a GET Request to get the next number from the input 'num'.
// Endpoint : /api/get-next-num
// Return the response as {message : , status: }

app.get("/api/get-next-num", (req, res) => {
	const num = Number(req.body.num);
	// console.log(num);
	if (num >= 0 || num < 0) {
		res.status(200).json({
			message: num + 1,
			status: "success",
		});
	} else {
		res.status(200).json({
			status: "success",
		});
	}
});

module.exports = app;
