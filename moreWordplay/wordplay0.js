// What are all of the words that both start with a “TH” and end with a “TH”?

const fs = require('fs');

// This function takes words from txt file and converts them into an array.
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

const scrabbleWordsArray = fileReader('sowpods.txt');

const filteredArr = scrabbleWordsArray.filter(
	word => word.startsWith('TH') && word.endsWith('TH')
);

console.log(filteredArr);
