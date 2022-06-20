// What is the longest word that can be made from only the letters in “RSTLNE”? Not all of those letters need to be used, and letters can be repeated. Make sure your solution can handle ties.

const fs = require('fs');

// This function takes words from txt file and converts them into an array.
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

const scrabbleWords = fileReader('sowpods.txt');
const regex = /^[RSTLNE]+$/gi;
const filteredWords = scrabbleWords.filter(word => regex.test(word));

const longestFilteredWordLength = filteredWords.reduce(
	(previousWord, currentWord) => {
		return previousWord.length >= currentWord.length
			? previousWord
			: currentWord;
	}
).length;

const longestFilteredWord = filteredWords.filter(
	word => word.length === longestFilteredWordLength
);

console.log(longestFilteredWord);
