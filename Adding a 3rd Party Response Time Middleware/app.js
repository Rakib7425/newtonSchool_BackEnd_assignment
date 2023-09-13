const express = require("express");
const responseTime = require("response-time");
const app = express();

app.use(express.json());
app.use(responseTime());

// Write the 3rd party RESPONSE-TIME middleware to get the desired result

// GET endpoint for sending the result
app.get("/", function (req, res) {
	res.send("Checking response time.");
});

module.exports = app;
