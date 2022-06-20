// What is the shortest baby name in the top 40 baby names for 2020

const fs = require('fs');

// This function takes words from txt file and converts them into an array.
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

const names2020 = fileReader('baby_names_2020_short.txt');
const names1880 = fileReader('baby_names_1880_short.txt');

const shortestBabyName = names2020.reduce((previousName, currentName) =>
	previousName.length <= currentName.length ? previousName : currentName
);
