// Write a function that takes a string phrase and returns a dictionary contains counts of how many times every character appears in phrase.

const fs = require('fs');

// This function takes words from txt file and converts them into an array.
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

function charCounter(str) {
	let charCountDictionary = {};
	for (let char of str) {
		if (charCountDictionary[char]) {
			charCountDictionary[char]++;
		} else {
			charCountDictionary[char] = 1;
		}
	}
	return charCountDictionary;
}

console.log(charCounter('Tennessee'));
