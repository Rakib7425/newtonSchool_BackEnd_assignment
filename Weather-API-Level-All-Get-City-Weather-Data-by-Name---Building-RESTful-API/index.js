const express = require("express");
const weatherRoutes = require("./weatherRoutes");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Router Middlewares
app.use(express.json());

app.use("/weather", weatherRoutes);

app.listen(3000, () => {
	console.log("running 3000");
});

module.exports = app;
