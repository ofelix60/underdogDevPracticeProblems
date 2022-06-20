// Write a function that takes a string word as the first argument, a string letter as the second argument, and returns a count of how many times letter occurs in word.

const fs = require('fs');

// This function takes words from txt file and converts them into an array.
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

function letterCounter(str, letter) {
	const letterQuery = new RegExp(letter, 'gi');
	return str.match(letterQuery).length;
}

console.log(letterCounter('Tennessee', 'e'));
