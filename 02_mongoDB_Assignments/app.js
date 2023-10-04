const express = require("express");
const app = express();
const userComparision = require("./routers/userComparisionRoutes");
const productComparision = require("./routers/productComparisionRoutes");
const product2 = require("./routers/product2");
const product3 = require("./routers/product3");
const logicalRoutesUser = require("./routers/logicalRoutesUser");
const logicalRoutesProduct = require("./routers/logicalRoutesProduct");
const userRoutes = require("./routers/userRoutes");
const User = require("./models/userModel");
//middleware
app.use(express.json());

//User POST ROUTE
// app.use("/api/users", userComparision);
// app.use("/api/users2", logicalRoutesUser);
// app.use("/api/users3/userRoutes/", userRoutes);
// app.use("/api/products/logical", logicalRoutesProduct);
// app.use("/api/products", productComparision);
// app.use("/api/products2", product2);
// app.use("/api/products3", product3);

// app.get("/", async function (req, res) {
// 	// https://my.newtonschool.co/playground/project/j8xactw291cg
// 	var name = req.query.name,
// 		count = 0;
// 	result = await User.find({});
// 	if (typeof name === "undefined") {
// 		count = result.length;
// 		res.send(JSON.stringify(count));
// 	} else {
// 		name = name.toLowerCase();
// 		for (var i = 0; i < result.length; i++) {
// 			var len = name.length,
// 				match = 1,
// 				cur_name = result[i]["name"].toLowerCase();
// 			if (cur_name.length >= len) {
// 				for (var j = 0; j < len; j++) {
// 					if (cur_name[j] != name[j]) {
// 						match = 0;
// 						break;
// 					}
// 				}
// 			}
// 			count += match;
// 		}
// 		res.send(JSON.stringify(count));
// 	}
// });

app.get("/", async function (req, res) {
	try {
		const { offset = 1, limit = 5 } = req.query;
		const users = await User.find()
			.limit(limit * 1)
			.skip((offset - 1) * limit);

		const count = users.length;

		res.status(200).json({
			status: "success",
			data: {
				count,
				users: users,
			},
		});
		//
	} catch (err) {
		res.status(404).json({
			message: "Users Not Found",
			status: "Error",
			error: err,
		});
	}
});

module.exports = app;
