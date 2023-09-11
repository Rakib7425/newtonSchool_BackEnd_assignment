const express = require("express");
const router = express.Router();
const weatherController = require("./weatherController");

// Level 1: Get City Weather Data by Name
router.get("/city/:name", async (req, res) => {
	try {
		const cityName = req.params.name;
		const weatherData = await weatherController.getWeatherDataByName(cityName);
		const data = {
			city: weatherData.city,
			temperature: weatherData.weather.temperature,
			humidity: weatherData.weather.humidity,
			windSpeed: weatherData.weather.windSpeed,
			conditions: weatherData.weather.conditions,
		};
		console.log(data);

		res.status(200).json({
			status: "success",
			message: "Weather data retrieved",
			data,
			// data: weatherData,
		});
	} catch (error) {
		console.log(error);
		res.status(404).json({
			status: "error",
			message: "Failed to retrieve weather data",
			error: "City not found",
		});
	}
});

module.exports = router;