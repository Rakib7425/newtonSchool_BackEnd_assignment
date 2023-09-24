const express = require("express");

// Importing the controller functions.
const {
	getAllUsers,
	getUserByID,
	createUser,
	updateUser,
	deleteUser,
} = require("../controllers/userControllers");

//Import the required middlware here.
const { grantAccessTo } = require("../grantAccessTo");

const router = express.Router();

// Public Routes
router.post("/", createUser);
router.get("/:id", getUserByID);
router.patch("/:id", updateUser);

//Admin Only Routes
router.get("/", getAllUsers);
router.delete("/:id", deleteUser);

module.exports = router;
