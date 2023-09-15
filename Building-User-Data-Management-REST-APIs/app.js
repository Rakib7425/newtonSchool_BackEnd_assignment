const express = require("express");
const fs = require("fs");
const { userInfo } = require("os");
const app = express();

// Parsing user data from user.json
const users = JSON.parse(fs.readFileSync(`${__dirname}/data/user.json`));

app.use(express.json());

async function saveDataToDatabase(data) {
	return new Promise((resolve, reject) => {
		const jsonData = JSON.stringify(data);

		fs.writeFile(`${__dirname}/data/user.json`, jsonData, (err) => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
}

/*
Write a GET Request to return all users. 
The response should be in the following format: 
{
    "status": "success",
    "data": {
        "users": [
            {
                "_id": 1,
                "name": "James B",
                "email": "jamesb@example.com"
            },
            ...
        ]
    }
}*/
app.get("/api/v1/users/", (req, res) => {
	try {
		//Write your code here.
		if (!!users) {
			res.status(200).send({
				status: "success",
				data: {
					users,
				},
			});
		}
	} catch (err) {
		res.status(404).json({
			message: "Users Not Found",
			status: "Error",
			error: err,
		});
	}
});

/*
Write a GET Request to return a user by ID. 
The response should be in the following format: 
{
    "status": "success",
    "data": {
        "user": {
            "_id": 1,
            "name": "James B",
            "email": "jamesb@example.com"
        }
    }
}
Return 404 error when user is not found. 
*/
app.get("/api/v1/users/:id", (req, res) => {
	try {
		//Write your code here
		const { id } = req.params;
		const user = users.find((item) => Number(item._id) === Number(id));
		// console.log(user);

		if (!!user) {
			res.status(201).send({
				status: "success",
				data: {
					user,
				},
			});
		} else {
			res.status(404).send({
				status: "Error",
				message: "User Not Found",
			});
		}
	} catch (err) {
		res.status(400).json({
			message: "User Fetching Failed",
			status: "Error",
			error: err,
		});
	}
});

/*
Write a POST request to create a new User. 
The response should be in the following format: 
{
    "status": "success",
    "data": {
        "user": {
            "_id": 5,
            "name": "Someone Someone",
            "email": "someone@gmail.com"
        }
    }
}
Generate a new id using the id of the last user in the database, increment it by 1
Return a 400 error when the email or name is missing 
*/
app.post("/api/v1/users/", (req, res) => {
	try {
		//Write your code here
		const { name, email } = req.body;
		if (!name || !email) {
			// If either name or email is missing, send a single error response
			return res.status(400).json({
				status: "Error",
				message: "Name or email missing",
			});
		}
		const newId = users[users.length - 1]._id + 1;
		const newUser = { _id: newId, name, email };
		users.push(newUser);

		saveDataToDatabase(users);
		// send the success response
		res.status(201).json({
			status: "success",
			data: {
				user: newUser,
			},
		});
	} catch (err) {
		res.status(400).json({
			message: "User Creation failed",
			status: "Error",
		});
	}
});

/*
Write a PATCH request to update user's name or email. 
The response should be in the following format: 
{
    "status": "success",
    "data": {
        "users": [
            {
                "_id": 1,
                "name": "James A",
                "email": "jamesA@example.com"
            },
            {
                "_id": 2,
                "name": "James B",
                "email": "jamesb@example.com"
            }, ....
        ]
    }
}
req.body can contain both name and email as well. Update the data based on the parameters recieved in req.body
Return a 404 error if the user is missing, with the following message 
{
    "message": "User not Found"
}
*/
app.patch("/api/v1/users/:id", (req, res) => {
	try {
		//Write your code here
		const { id } = req.params;
		let dbData = users.find((item) => Number(item._id) === Number(id));
		console.log(dbData);
		const body = req.body;

		if (!!dbData) {
			let name = "";
			let email = "";
			if (body.name) {
				name = body.name;
				dbData.name = name;

				saveDataToDatabase(users);
			} else if (body.email) {
				email = body.email;
				dbData.email = email;
				saveDataToDatabase(users);
			} else {
				email = body.email;
				name = body.name;
				dbData.name = name;
				dbData.email = email;

				saveDataToDatabase(users);
			}

			// console.log(users);
			// saveDataToDatabase(users);
			res.status(201).send({
				status: "success",
				data: {
					users,
				},
			});
		} else {
			res.status(404).send({
				status: "Error",
				message: "User Not Found",
			});
		}
	} catch (err) {
		console.log(err);
		res.status(400).json({
			message: "User Updation Failed",
			status: "Error",
			error: err,
		});
	}
});

/*
Write a DELETE request to delete the user from the users.json
The response should be in the following format: 
{
    "status": "success",
    "data": {
        "users": [
            {
                "_id": 1,
                "name": "James A",
                "email": "jamesA@example.com"
            },
            {
                "_id": 2,
                "name": "James B",
                "email": "jamesb@example.com"
            }, .... // Shouldn't have the user deleted.
        ]
    }
}

Return a 404 error if the user is missing, with the following message 
{
    "message": "User not Found"
}
*/
app.delete("/api/v1/users/:id", (req, res) => {
	try {
		//Write your code here
		const { id } = req.params;
		let index = -1;
		let dbData = users.find((item, idx) => {
			index = idx;
			return Number(item._id) === Number(id);
		});
		// console.log(dbData);

		if (!!dbData) {
			// const index = users.findIndex((item) => Number(item.id) === Number(id));
			// console.log(users);

			users.splice(index, 1);
			// console.log(index);

			saveDataToDatabase(users);

			res.status(201).send({
				status: "success",
				message: "success",
				data: {
					users,
				},
			});
		} else {
			res.status(404).send({
				message: "User Not Found",
				status: "Error",
			});
		}
	} catch (err) {
		console.log(err);
		res.status(400).json({
			message: "User Deletion Failed",
			status: "Error",
			error: err,
		});
	}
});

module.exports = app;
