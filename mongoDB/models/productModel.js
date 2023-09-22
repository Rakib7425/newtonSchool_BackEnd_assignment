const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: false,
		unique: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		required: true,
		type: Number,
	},
	discountPercentage: {
		type: Number,
		required: false,
	},
	rating: {
		type: Number,
		required: false,
	},
	stock: {
		type: Number,
		required: true,
	},
	brand: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	thumbnail: {
		type: String,
		required: true,
	},
	images: {
		type: Array,
		required: true,
	},
	reviews: {
		type: Array,
		required: true,
	},
	// createdAt: {
	// 	type: String,
	// 	default: new Date().toLocaleString(),
	// },
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;

// {
// 	"title": "Hello product",
// 	"description": "Hello product Desc",
// 	"price": 69,
// 	"discountPercentage": 0.2,
// 	"rating": 5,
// 	"stock": 69,
// 	"brand": "Ayy hayee",
// 	"category": "Not important",
// 	"thumbnail": "Ayy hayee! kitne saste ho tum",
// 	"images": [
// 	  {
// 		"type": "aa",
// 		"required": "false"
// 	  },
// 	  {
// 		"type": "gg",
// 		"required": true
// 	  }
// 	],
// 	"reviews": [
// 	  {
// 		"type": "Array",
// 		"required": true
// 	  },
// 	  {
// 		"type": "Array",
// 		"required": false
// 	  }
// 	]
//   }
