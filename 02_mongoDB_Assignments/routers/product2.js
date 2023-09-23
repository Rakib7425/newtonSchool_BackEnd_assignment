const express = require("express");

// Importing the controller functions.
const {
	getProductByID,
	createProduct,
	updateProduct,
	deleteProduct,
	searchProducts,
} = require("../controllers/productControllers");

const router = express.Router();

router.get("/:id", getProductByID);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);
//complet the Route that return the object id of all the user which email is of type @yahoo.com.
//it should be Case insensitive



module.exports = router;
