// What are all of the words that have only “E”s for vowels and are at least 15 letters long?

const fs = require('fs');

// This function takes words from txt file and converts them into an array.
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

const scrabbleWordsArray = fileReader('sowpods.txt');

const vowelCount = str => {
	let vowels = /[aeiou]/gi;
	return [...new Set(str.match(vowels))];
};
const filteredArr = scrabbleWordsArray.filter(word => {
	let vowels = vowelCount(word);
	if (word.length === 15 && vowels.length === 1 && vowels.includes('E')) {
		return word;
	}
});

console.log(filteredArr);
