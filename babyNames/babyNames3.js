// What are all of the names that were top 40 baby names in both 1880 and 2020?

const fs = require('fs');

// This function takes words from txt file and converts them into an array.
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

const names2020 = new Set(fileReader('baby_names_2020_short.txt'));
const names1880 = new Set(fileReader('baby_names_1880_short.txt'));

const results = [];

names2020.forEach(name => {
	if (names1880.has(name)) results.push(name);
});

console.log(results);
