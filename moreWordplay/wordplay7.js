// What are all of the words that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)? Not all of those letters need to be used, and letters can be repeated.

const fs = require('fs');

// This function takes words from txt file and converts them into an array.
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

const scrabbleWords = fileReader('sowpods.txt');
const regex = /[AEIOSHRTN]/gi;
const filteredWords = scrabbleWords.filter(word => !word.match(regex));
console.log(filteredWords);
