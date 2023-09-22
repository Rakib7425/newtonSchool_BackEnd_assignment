const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data", "data.json");

// Function to read data from the database file
function readDataFromDatabase() {
  try {
    const data = fs.readFileSync(usersFilePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Function to save data to the database file
function saveDataToDatabase(data) {
  return new Promise((resolve, reject) => {
    const jsonData = JSON.stringify(data);

    fs.writeFile(usersFilePath, jsonData, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

// Initialize the 'users' array by reading data from the database file
let users = readDataFromDatabase();

const getAllUsers = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      status: "Error",
    });
  }
};

const createUser = (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({
        status: "Error",
        message: "Name or email missing",
      });
    }

    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const newUser = { id: newId, name, email };
    users.push(newUser);

    saveDataToDatabase(users)
      .then(() => {
        res.status(201).json({
          message: "User created",
          status: "success",
          data: newUser,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Internal server error",
          status: "Error",
        });
      });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      status: "Error",
    });
  }
};

const updateUser = (req, res) => {
  try {
    const { id } = req.params;
    const dbData = users.find((item) => Number(item.id) === Number(id));

    if (dbData) {
      const body = req.body;
      if (body.name) {
        dbData.name = body.name;
      }
      if (body.email) {
        dbData.email = body.email;
      }

      saveDataToDatabase(users)
        .then(() => {
          res.status(200).json({
            message: "User updated",
            status: "success",
            data: dbData,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: "Internal server error",
            status: "Error",
          });
        });
    } else {
      res.status(404).json({
        status: "Error",
        message: "User not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      status: "Error",
    });
  }
};

const deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    const index = users.findIndex((item) => Number(item.id) === Number(id));

    if (index !== -1) {
      const deletedUser = users.splice(index, 1)[0];

      saveDataToDatabase(users)
        .then(() => {
          res.status(200).json({
            status: "success",
            message: "User deleted",
            data: deletedUser,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: "Internal server error",
            status: "Error",
          });
        });
    } else {
      res.status(404).json({
        message: "User not found",
        status: "Error",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      status: "Error",
    });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
