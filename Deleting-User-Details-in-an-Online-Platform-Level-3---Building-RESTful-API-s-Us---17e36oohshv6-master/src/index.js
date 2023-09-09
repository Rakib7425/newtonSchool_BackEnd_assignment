const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

//connect to DB
// mongoose.connect(
// 	process.env.DATABASE_URL,
// 	{ useNewUrlParser: true, useUnifiedTopology: true },
// 	() => {
// 		console.log("connected to DB");
// 	}
// );

// const filter = {};
// const client = await mongoose.connect(
// 	"mongodb+srv://newtonAssignment:newtonAssignment@newton-backend.jkrszgc.mongodb.net/",
// 	{ useNewUrlParser: true, useUnifiedTopology: true }
// );
// const coll = client.db("sample_guides").collection("planets");
// const cursor = coll.find();
// const result = await cursor.toArray();

// app.listen(3200, () => console.log("Server running......"));

// await client.close();
