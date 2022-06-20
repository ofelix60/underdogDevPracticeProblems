// What are the shortest words that start with “PRO” and end in “ING”? Make sure your solution can handle ties.

const fs = require('fs');

// This function takes words from txt file and converts them into an array.
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

const scrabbleWordsArray = fileReader('sowpods.txt');

const filteredArr = scrabbleWordsArray.filter(word => {
	if (word.startsWith('PRO') && word.endsWith('ING')) {
		return word;
	}
});
const shortestWithPrefixSuffix = filteredArr.reduce(
	(previousWord, currentWord) => {
		return previousWord.length <= currentWord.length
			? previousWord
			: currentWord;
	}
).length;

const shortestWithPrefixSuffixArray = filteredArr.filter(
	word => word.length === shortestWithPrefixSuffix
);
console.log(shortestWithPrefixSuffixArray);
