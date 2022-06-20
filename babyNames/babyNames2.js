// There is at least one baby name from the top 40 baby names for 2020 that, when spelled backwards, is a valid Scrabble word. Find and print all such names.

// Solve this two ways: first with an array to hold the Scrabble words, and then with a dictionary (or set) to hold the Scrabble words. Use timer functions to measure how long it takes to complete this work under each implementation. Why is the time different?

const fs = require('fs');

// This function takes words from txt file and converts them into an array.
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};
const namesArr2020 = fileReader('baby_names_2020_short.txt');

// SET
const scrabbleWordsSet = new Set(fileReader('sowpods.txt'));

console.time();
function reversedStrExistsInSet(str, set) {
	reversedName = str.toUpperCase().split('').reverse().join('');
	return set.has(`${reversedName}`);
}

const reversedNameValidScrabbleWordSet = namesArr2020.filter(name =>
	reversedStrExistsInSet(name, scrabbleWordsSet)
);

console.log(reversedNameValidScrabbleWordSet);
console.timeEnd();

// ARRAY
const scrabbleWordsArray = fileReader('sowpods.txt');

console.time();
function reversedStrExistsInArray(str, arr) {
	reversedName = str.toUpperCase().split('').reverse().join('');
	return arr.includes(`${reversedName}`);
}

const reversedNameValidScrabbleWordArr = namesArr2020.filter(name =>
	reversedStrExistsInArray(name, scrabbleWordsArray)
);
console.log(reversedNameValidScrabbleWordArr);
console.timeEnd();
