// What are all of the words that have only “U”s for vowels?

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
	if (vowels.length === 1 && vowels.includes('U')) {
		return word;
	}
});

console.log(filteredArr);
