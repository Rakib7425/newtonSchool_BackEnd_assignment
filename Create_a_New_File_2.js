const fs = require("fs");

const fileName = "myfile.txt";
const fileContent = "Newton School";

// Function to check if a file exists
const fileExists = (fileName) => {
	try {
		fs.accessSync(fileName, fs.constants.F_OK);
		return true;
	} catch (err) {
		return false;
	}
};
// Function to create a new file with fileContent
const writeFile = (fileName, fileContent) => {
	try {
		if (fileExists(fileName)) {
			console.log(`${fileName} already exists. Skipping write operation`);
		} else {
			fs.writeFileSync(fileName, fileContent);
			console.log(`File ${fileName} created and data written successfully!`);
		}
	} catch (err) {
		console.error(`Error creating file ${fileName}: ${err}`);
	}
};
// writeFile(fileName, fileContent);
module.exports = writeFile;

/**
 * This is simple code completion project to learn about how to create a new file



Implement the functions in index.js file,



You are given a boilerplate of node-express code where you will simply have to write function to check if the file with the given name already exists else create a new file, function definition is already given, with parameters.

writeFile will create a file with given name and content. (Do not change the function name and the paramenters)



The function will create the file with the name myfile.txt and the content of the file will we Newton School.



Sample Input/Output:



Case1: If the file with the given name already exists



Output:




myfile.txt already exists. Skipping write operation


Case2: If the file with the given name does not exists



Output:




File myfile.txt created and data written successfully!


Complete the boilerplate code by following the comments.
 * 
 * 
 */
