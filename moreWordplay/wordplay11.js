// Write a function that takes a string prefix as the first argument, a string suffix as the second argument, and an integer length as the third argument. It should return an array of all of the words that start with that prefix, end with that suffix, and are that length.

const fs = require('fs');

// This function takes words from txt file and converts them into an array.
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

const scrabbleWords = fileReader('sowpods.txt');

function prefixSuffixLengthFinder(prefix, suffix, length) {
	return scrabbleWords.filter(
		word =>
			word.startsWith(prefix) && word.endsWith(suffix) && word.length === length
	);
}

console.log(prefixSuffixLengthFinder('UN', 'ED', 10));
