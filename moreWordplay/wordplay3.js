// What are all of the words that start with “PRO”, end in “ING”, and are exactly 11 letters long?

const fs = require('fs');

// This function takes words from txt file and converts them into an array.
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

const scrabbleWordsArray = fileReader('sowpods.txt');

const filteredArr = scrabbleWordsArray.filter(word => {
	if (word.length === 11 && word.startsWith('PRO') && word.endsWith('ING')) {
		return word;
	}
});

console.log(filteredArr);
