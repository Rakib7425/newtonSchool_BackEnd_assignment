const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./models/userModel");
const fs = require("fs");

dotenv.config();

//connect to DB
// mongoose.set("useCreateIndex", true);
// mongoose.set("useFindAndModify", false);

const url = process.env.MONGO_URL || "mongodb://0.0.0.0:27017/users";
mongoose
	.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("connected to DB at " + url));

app.listen(3000, () => console.log("Server running at 3000"));
