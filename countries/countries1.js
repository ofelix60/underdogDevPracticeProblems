// What countries both begin and end with a vowel?

const fs = require('fs');
const countries = 'countries.txt';
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

function startsEndsWithVowel(str) {
	const vowelArr = ['a', 'e', 'i', 'o', 'u'];
	return (
		str.length > 2 &&
		vowelArr.includes(str[0].toLowerCase()) &&
		(vowelArr.includes(str[str.length - 1].toLowerCase()) ||
			str[str.length - 1] === 'y')
	);
}
