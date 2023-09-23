//eq,gt,gte,lt,lte,in
// $eq=Matches values that are equal to a specified value.
// $gt=Matches values that are greater than a specified value.
// $gte=Matches values that are greater than or equal to a specified value.
// $lt=Matches values that are less than a specified value.
// $lte=Matches values that are less than or equal to a specified value.
// $in=Matches any of the values specified in an array.

const router = require("express").Router();
const Product = require("../models/productModel");

//  Will give a value which is qual to 19.99
router.get("/eq", async (req, res) => {
	try {
		//Write a code here for eq operator
		const user = await Product.find({ price: { $eq: 19.99 } });
		res.status(200).send(user);
	} catch (error) {
		res.status(404).send(error);
	}
});
// Will give a value which has a price greater than 19.99
// Greater Than Symbol="$gt"
router.get("/gt", async (req, res) => {
	try {
		//Write a code here for gt operator
		const user = await Product.find({ price: { $gt: 19.99 } });

		res.status(200).send(user);
	} catch (error) {
		res.status(404).send(error);
	}
});

// will give a price which is greater than or equal to 19.99
// Greater Than or equal to Symbol="$gte"
router.get("/gte", async (req, res) => {
	try {
		//Write a code here for gte operator
		const user = await Product.find({ price: { $gte: 100 } });

		res.status(200).send(user);
	} catch (error) {
		res.status(404).send(error);
	}
});

//will give a price which is less than 19.99
// Less Than Symbol="$lt"
router.get("/lt", async (req, res) => {
	try {
		//Write a code here for lt operator
		const user = await Product.find({ price: { $lt: 100 } });

		res.status(200).send(user);
	} catch (error) {
		res.status(404).send(error);
	}
});

//will give a price which is less than or equal to 19.99
// Less Than Equal To Symbol="$lte"
router.get("/lte", async (req, res) => {
	try {
		//Write a code here for lte operator
		const user = await Product.find({ price: { $lte: 100 } });

		res.status(200).send(user);
	} catch (error) {
		res.status(404).send(error);
	}
});

//will return price which includes 19.99,25
//in symbol="$in"
router.get("/in", async (req, res) => {
	try {
		//Write a code here for in operator
		const user = await Product.find({ price: { $in: [100, 200] } });

		res.status(200).send(user);
	} catch (error) {
		res.status(404).send(error);
	}
});

module.exports = router;

/**Comparision operator for Products - Enhancing the Ecommerce App, Schemas, Saving a document, Querying a document, Co ... - Post Classby Rakibul Islam
Comparision operator for Products

Title: Product Filtering API


Introduction:

This is an Express API that provides various endpoints for filtering products based on their prices using different comparison operators. The API uses MongoDB as the database and Mongoose as the ODM (Object Document Mapper) to interact with the database.



Edit comperisionRouter. js



Endpoints:



1) /eq - Get products with price equal to 19.99

HTTP Method: GET

Endpoint: /eq

Expected Input: None

Expected Output: JSON array containing products with price equal to 19.99

Example URL: http://localhost:3000/eq

Example Output:



[  {

   "_id": "6123456789abcdef12345678",

   "name": "Product1",    "price": 19.99,

   "createdAt": "2022-01-01T00:00:00.000Z",  

 "updatedAt": "2022-01-01T00:00:00.000Z",

   "__v": 0  

}]




/gt - Get products with price greater than 19.99




HTTP Method: GET

Endpoint: /gt

Expected Input: None

Expected Output: JSON array containing products with price greater than 19.99

Example URL: http://localhost:3000/gt

Example Output:

[  {

   "_id": "6123456789abcdef12345678",

   "name": "Product2",

   "price": 29.99,

   "createdAt": "2022-01-01T00:00:00.000Z",

   "updatedAt": "2022-01-01T00:00:00.000Z",

   "__v": 0  },

{

   "_id": "6123456789abcdef12345679",

   "name": "Product3",

   "price": 39.99,

   "createdAt": "2022-01-01T00:00:00.000Z",

   "updatedAt": "2022-01-01T00:00:00.000Z",

   "__v": 0

 }]

3. /gte - Get products with price greater than or equal to 100

HTTP Method: GET

Endpoint: /gte

Expected Input: None

Expected Output: JSON array containing products with price greater than or equal to 100

Example URL: http://localhost:3000/gte

Example Output:

[  {    "_id": "6123456789abcdef12345678",

   "name": "Product4",

   "price": 100,

   "createdAt": "2022-01-01T00:00:00.000Z",

   "updatedAt": "2022-01-01T00:00:00.000Z",

   "__v": 0  

},

 {    "_id": "6123456789abcdef12345679",

   "name": "Product5",

   "price": 150,

   "createdAt": "2022-01-01T00:00:00.000Z",

   "updatedAt": "2022-01-01T00:00:00.000Z",

   "__v": 0

 }]

4.  /lt - Get products with price less than 100

HTTP Method: GET

Endpoint: /lt

Expected Input: None

Expected Output: JSON array containing products with price less than 100

Example URL: http://localhost:3000/lt

[

  {

    "_id": "6123456789abcdef12345678",

    "name": "Product1",

    "price": 19.99,

    // other product properties

  },

  {

    "_id": "6123456789abcdef12345679",

    "name": "Product2",

    "price": 29.99,

    // other product properties

  }

]

5.  /lte - Get products with price less than or equal to a specified value

HTTP Method: GET

Endpoint: /lte/:price

Expected Input: URL parameter - price (number) - the price value to filter by

Expected Output: JSON array containing products with price less than or equal to the specified value

Example URL: http://localhost:3000/lte/100

Example Output:

[

  {

    "_id": "6123456789abcdef12345678",

    "name": "Product1",

    "price": 19.99,

    // other product properties

  },

  {

    "_id": "6123456789abcdef12345679",

    "name": "Product2",

    "price": 29.99,

    // other product properties

  },

  {

    "_id": "6123456789abcdef1234567b",

    "name": "Product4",

    "price": 100,

    // other product properties

  }

]6) /in - Get products with prices matching values in an array

HTTP Method: GET

Endpoint: /in

Expected Input: None

Expected Output: JSON array containing products with prices matching the values in the array [100, 200]

Example URL: http://localhost:3000/in

Example Output:

[

  {

    "_id": "6123456789abcdef1234567c",

    "name": "Product3",

    "price": 200,

    // other product properties

  },

  {

    "_id": "6123456789abcdef1234567b",

    "name": "Product4",

    "price": 100,

    // other product properties

  }

]

Note: Write a code inside a comperisionRouter. js */
