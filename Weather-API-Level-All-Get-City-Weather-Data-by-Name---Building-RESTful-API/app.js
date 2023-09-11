const express = require("express");
const weatherRoutes = require("./weatherRoutes");
const app = express();

// router.get("/city/:name", async (req, res) => {
// 	try {
// 		const cityName = req.params.name;
// 		const weatherData = await weatherController.getWeatherDataByName(cityName);
// 		res.status(200).json({
// 			status: "success",
// 			message: "Weather data retrieved",
// 			data: weatherData,
// 		});
// 	} catch (error) {
// 		console.log(error);
// 		res.status(404).json({
// 			status: "error",
// 			message: "Failed to retrieve weather data",
// 			error: error.message,
// 		});
// 	}
// });
// module.exports = router;

//Router Middlewares
app.use(express.json());
app.use("/weather", weatherRoutes);

module.exports = app;
