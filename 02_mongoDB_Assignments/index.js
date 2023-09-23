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
	.then(() => console.log("connected to DB" + url));

app.listen(3000, () => console.log("Server running at 3000"));

/***
 *
 *Comparison query operators- User - Enhancing the Ecommerce App, CRUD Operations Using Mongoose & MongoDB, Connectin ... - In Classby Rakibul Islam
Comparison query operators- User

Comparison Operator- User

You have to make a project to demonstrate the usage of various comparison operators such as $eq, $gt, $gte, $lt, $lte, and $in to filter and retrieve user records based on specific conditions.

The following are some examples of the comparison operators you will be using:




$eq: Matches values that are equal to a specified value.

$gt: Matches values that are greater than a specified value.

$gte: Matches values that are greater than or equal to a specified value.

$lt: Matches values that are less than a specified value.

$lte: Matches values that are less than or equal to a specified value.

$in: Matches any of the values specified in an array.



The folder structure of the project should consist of three main folders: "src," "models," and "routes,".




"src":  contains the "index.js" and "app.js" files, where "index.js" handles the database connection.

"models": Inside a "src" you will find a "models" folder which contains userModel.js

"routes": Inside a "src" you will find a "routes" folder which contains comparisionRoutes.js You'll find routing logic with endpoints in these files. 

Note: You only have to edit comparisionRoutes.js which is inside a routes folder



WHAT YOU HAVE TO DO?



 



1. /eq: This route uses the $eq operator to find users whose age is equal to 20.



Method: GET

Endpoint: /eq

Success Response Status: 200

Expected Output:

[

  {

    "_id": "6099a35e65c1234567890123",

    "username": "johndoe",

    "email": "johndoe@example.com",

    "age": 20,

    "createdAt": "2021-05-10T10:00:00.000Z",

    "updatedAt": "2021-05-10T11:00:00.000Z"

  },

  ...

]



2. /gt: This route uses the $gt operator to find users whose age is greater than 20.



Method: GET

Endpoint: /gt

Success Response Status: 200

Expected Output:

[

  {

    "_id": "6099a35e65c1234567890124",

    "username": "janedoe",

    "email": "janedoe@example.com",

    "age": 25,

    "createdAt": "2021-05-10T10:30:00.000Z",

    "updatedAt": "2021-05-10T11:30:00.000Z"

  },

  ...

]



3. /gte: This route uses the $gte operator to find users whose age is greater than or equal to 20.



Method: GET

Endpoint: /gte

Success Response Status: 200

Expected Output:

[

  {

    "_id": "6099a35e65c1234567890123",

    "username": "johndoe",

    "email": "johndoe@example.com",

    "age": 20,

    "createdAt": "2021-05-10T10:00:00.000Z",

    "updatedAt": "2021-05-10T11:00:00.000Z"

  },

  {

    "_id": "6099a35e65c1234567890124",

    "username": "janedoe",

    "email": "janedoe@example.com",

    "age": 25,

    "createdAt": "2021-05-10T10:00:00.000Z",

    "updatedAt": "2021-05-10T11:00:00.000Z"

  },

]



4. /lt: This route uses the $lt operator to find users whose age is less than 20.



Method: GET

Endpoint: /lt

Success Response Status: 200

Expected Output:

[

  {

    "_id": "6099a35e65c1234567890125",

    "username": "alice",

    "email": "alice@example.com",

    "age": 18,

    "createdAt": "2021-05-10T10:15:00.000Z",

    "updatedAt": "2021-05-10T11:15:00.000Z"

  }

]



5. /lte: This route uses the $lte operator to find users whose age is less than or equal to 20.



Method: GET

Endpoint: /lte

Success Response Status: 200

Expected Output:

[

  {

    "_id": "6099a35e65c1234567890123",

    "username": "johndoe",

    "email": "johndoe@example.com",

    "age": 20,

    "createdAt": "2021-05-10T10:00:00.000Z",

    "updatedAt": "2021-05-10T11:00:00.000Z"

  },

  {

    "_id": "6099a35e65c1234567890125",

    "username": "alice",

    "email": "alice@example.com",

    "age": 18,

    "createdAt": "2021-05-10T10:15:00.000Z",

    "updatedAt": "2021-05-10T11:15:00.000Z"

  }

]



6. /in: This route uses the $in operator to find users whose age is either 20 or 25.



Method: GET

Endpoint: /in

Success Response Status: 200

Expected Output:

[

  {

    "_id": "6099a35e65c1234567890123",

    "username": "johndoe",

    "email": "johndoe@example.com",

    "age": 20,

    "createdAt": "2021-05-10T10:00:00.000Z",

    "updatedAt": "2021-05-10T11:00:00.000Z"

  },

  {

    "_id": "6099a35e65c1234567890124",

    "username": "janedoe",

    "email": "janedoe@example.com",

    "age": 25,

   }

] 

 */
