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

module.exports = {
	getWeatherDataByName,
};
