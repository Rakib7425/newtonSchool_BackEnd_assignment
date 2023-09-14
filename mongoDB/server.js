// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = process.env.PORT || 8080;

// Connect to MongoDB
mongoose.connect(
	"mongodb+srv://newtonAssignment:newtonAssignment@newton-backend.jkrszgc.mongodb.net/newton-backend",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(express.json());
app.use("/user", userRoutes);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
