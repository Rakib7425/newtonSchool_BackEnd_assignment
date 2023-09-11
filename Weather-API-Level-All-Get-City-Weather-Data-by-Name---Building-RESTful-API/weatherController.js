const fs = require("fs");

async function getDataFromDatabase() {
	return new Promise((resolve, reject) => {
		fs.readFile("./data.json", (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(JSON.parse(data));
			}
		});
	});
}

async function saveDataToDatabase(data) {
	return new Promise((resolve, reject) => {
		const jsonData = JSON.stringify(data);
		fs.writeFile("./data.json", jsonData, (err) => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
}

// Level 1: Get City Weather Data by Name

const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`));

async function getWeatherDataByName(cityName) {
	let name = cityName.toLowerCase();
	const fetchedData = data.find((item) => item.city.toLowerCase() === name);
	// console.log(fetchedData);
	return fetchedData;
}

/*
  Instructions for students:
  Implement the function getForecastDataByName(cityName) that retrieves the 7-day weather forecast data for a city by its name.

  Tips:
    - Use the getDataFromDatabase() function to retrieve the data from the database.
    - Access the array of cities and their forecast data from the returned result.
    - Find the city object with the matching name and extract its forecast data.
    - Return the appropriate JSON response based on the result.

*/

// Level 2: Get 7 Days Weather Forecast Data by Name
async function getForecastDataByName(cityName) {
	// TODO: Implement this function
	// console.log(cityName);
	let name = cityName.toLowerCase();
	// let = forecast;
	const fetchedData = data.find((item) => {
		if (item.city.toLowerCase() === name) {
			let forecast = item.forecast;
			return forecast;
		} else {
			return false;
		}
	});
	// console.log(forecast);
	return fetchedData.forecast;
}

module.exports = {
	getWeatherDataByName,
	getForecastDataByName,
};
