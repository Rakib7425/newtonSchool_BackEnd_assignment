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

// Level 2: Get 7 Days Weather Forecast Data by Name
router.get("/forecast/city/:name", async (req, res) => {
	try {
		const cityName = req.params.name;
		const forecastData = await weatherController.getForecastDataByName(cityName);
		console.log(forecastData);
		if (forecastData) {
			res.status(200).json({
				status: "success",
				message: "Forecast data retrieved",
				data: forecastData,
			});
		} else {
			res.status(404).json({
				status: "error",
				message: "Failed to retrieve forecast data",
				error: "City not found",
			});
		}
	} catch (error) {
		res.status(404).json({
			status: "error",
			message: "Failed to retrieve forecast data",
			error: error.message,
		});
	}
});

// Level 3: Get City Weather Data by ZipCode
router.get("/city/zipcode/:code", async (req, res) => {
	// TODO: Implement this function
	try {
		const code = req.params.code;
		const zipData = await weatherController.getWeatherDataByZipCode(code);
		// console.log(zipData);
		if (!!zipData) {
			res.status(200).json({
				status: "success",
				message: "Weather data retrieved",
				data: zipData.forecast,
			});
		} else {
			res.status(404).json({
				status: "error",
				message: "ZipCode not found",
				error: "ZipCode not found",
			});
		}
	} catch (error) {
		res.status(404).json({
			status: "error",
			message: "ZipCode not found",
			error: "ZipCode not found",
		});
	}
});

module.exports = router;
