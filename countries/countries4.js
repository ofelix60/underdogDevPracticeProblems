// What countries use only one vowel in their name (the vowel can be used multiple times)
// - For example, if the word “BEEKEEPER” were a country, it would be an answer, because it only uses “E”.

const fs = require('fs');
const countries = 'countries.txt';
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

function oneVowelString(str) {
	const vowelsInWord = str.toLowerCase().match(/[aeiou]/g);
	return vowelsInWord.every(val => val === vowelsInWord[0]);
}

console.log(fileReader(countries).filter(oneVowelString));
