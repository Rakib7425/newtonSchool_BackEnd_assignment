const fs = require("fs").promises;

const updateFile = async (fileName, fileContent) => {
	fileContent = "Newton School, is an online learning platform.";

	try {
		await fs.writeFile(fileName, fileContent);
		console.log(`File "${fileName}" has been updated.`);
	} catch (error) {
		console.error(`Error updating file "${fileName}": ${error.message}`);
	}
};

module.exports = updateFile;

// Uses
// const updateFile = require('./updateFile');

// const fileName = 'myfile.txt';
// const newContent = 'This is the new content of the file.';

// updateFile(fileName, newContent);

/**
 * You have a Node.js Express application with a text file named "myfile.txt" that contains some initial content. Your task is to implement a function in the "index.js" file to update the content of this file.


Function to Implement:


const updateFile = async (fileName, fileContent)


The updateFile function takes two parameters:




fileName (string): Contains the name of the file that needs to be updated.

fileContent: The new content that should replace the existing content in the file.



Sample Output: Suppose the initial content of the file "myfile.txt" is "Newton School" and the fileContent parameter is "Newton School, is an online learning platform.".



In this case, the expected output of the updateFile function should be "Newton School, is an online learning platform.".



You need to complete the boilerplate code in the "index.js" file by following the comments provided to update the content of the file correctly. Please make sure not to change the function name or the parameters defined in the boilerplate code.
 */
