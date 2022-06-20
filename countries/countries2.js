// What country names are > 50% vowels?

const fs = require('fs');
const countries = 'countries.txt';
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

function greaterThanFifty(str) {
	const vowelArr = ['a', 'e', 'i', 'o', 'u'];
	let counter = 0;
	for (letter of str.toLowerCase()) {
		if (vowelArr.includes(letter)) counter++;
	}
	if (counter > str.length / 2) return true;
}

function filterItems(arr, callback) {
	return arr.filter(el => {
		return callback(el);
	});
}
