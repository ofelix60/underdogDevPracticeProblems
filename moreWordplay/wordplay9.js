// Write a function that takes a string substring as an argument and returns an array of all of the words that contain that substring (the substring can appear anywhere in the word).

const fs = require('fs');

// This function takes words from txt file and converts them into an array.
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

const scrabbleWords = fileReader('sowpods.txt');

function subStringFinder(subStr) {
	return scrabbleWords.filter(word => word.includes(subStr));
}

console.log(subStringFinder('POST'));
