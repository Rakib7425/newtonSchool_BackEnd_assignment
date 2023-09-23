const express = require("express");
const app = express();
const userComparision = require("./routers/userComparisionRoutes");
const productComparision = require("./routers/productComparisionRoutes");
const product2 = require("./routers/product2");
const logicalRoutes = require("./routers/logicalRoutes");
const User = require("./models/userModel");

//middleware
app.use(express.json());

//User POST ROUTE
app.use("/api/users", userComparision);
app.use("/api/users2", logicalRoutes);
app.use("/api/products", productComparision);
app.use("/api/products2", product2);

app.get("/", async (req, res) => {
	// https://my.newtonschool.co/playground/project/j8xactw291cg
	try {
		const { name } = req.query;

		let user;

		if (!name) {
			count = await User.find({}).count();
		} else {
			const regex = new RegExp(`^${name}`, "i");
			count = await User.find({ username: { $regex: regex } }).count();
			// count = await User.find({ name: { $regex: regex } }).count();
		}
		Number(count);
		res.send({ count });
	} catch (error) {
		console.error("Error:", error);
		res.status(500).send({ error: "Internal server error" });
	}
});

module.exports = app;
