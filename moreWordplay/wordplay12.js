// Write a function that takes a string word as an argument and returns a count of all of the “A”s in that string.

const fs = require('fs');

// This function takes words from txt file and converts them into an array.
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

const scrabbleWords = fileReader('sowpods.txt');

function letterACounter(str) {
	const aFinder = /[a]/gi;
	return str.match(aFinder).length;
}

console.log(letterAFinder('AARDVARK'));
