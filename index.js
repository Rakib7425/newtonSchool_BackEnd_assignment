const app = require("./Deleting-User-Details-in-an-Online-Platform-Level-3---Building-RESTful-API-s-Us---17e36oohshv6-master/src/app.js");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

dotenv.config();

//connect to DB
// const startServer = async () => {

// const client = MongoClient.connect(
// 	"mongodb+srv://newtonAssignment:newtonAssignment@newton-backend.jkrszgc.mongodb.net/",
// 	{ useNewUrlParser: true, useUnifiedTopology: true }
// ).then((res) => {
// 	console.log("Mongo running.....");
// 	console.log(res.db());
// });

// const db = client.db("sample_guides").collection("planets");
// const cursor = coll.find();
// const result = await cursor.toArray();
// console.log(result);
// await client.close();
// };

// startServer();

app.listen(3000, () => console.log("Server running...3000..."));
