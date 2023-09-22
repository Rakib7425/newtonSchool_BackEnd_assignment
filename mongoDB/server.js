// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
const port = process.env.PORT || 8080;

// Connect to MongoDB
// mongoose.connect(
// 	"mongodb+srv://newtonAssignment:newtonAssignment@newton-backend.jkrszgc.mongodb.net/newton-backend",
// 	{
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	}
// );
mongoose
	.connect("mongodb://127.0.0.1:27017/ecomm", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((res) => {
		console.log("DB connected");
	})
	.catch((err) => {
		console.log(err);
	});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(express.json());
// app.use(express.urlencoded());

const apiVersion = "/api/v1";

app.use(`${apiVersion}/user`, userRoutes);
app.use(`${apiVersion}/products`, productRoutes);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
