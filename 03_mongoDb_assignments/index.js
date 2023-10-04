const app = require("./src/app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
//connect to DB
// mongoose.set("useCreateIndex", true);
// mongoose.set("useFindAndModify", false);
const url = process.env.MONGO_URL || "mongodb://0.0.0.0:27017/assignment";
mongoose
	.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("connected to DB at " + url));

app.listen(3000, () => console.log("Server running at 3000"));
