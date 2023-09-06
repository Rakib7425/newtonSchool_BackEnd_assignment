const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

//Using app.listen create your first express server on port 3000
app.listen(port);
module.exports = app;
