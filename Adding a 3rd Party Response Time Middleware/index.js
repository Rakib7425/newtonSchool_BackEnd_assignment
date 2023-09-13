const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

app.listen(5000, () => console.log("Server running at 5000"));
