// What are the longest baby names in the top 40 baby names for 2020? Make sure you can handle if there’s a tie.

const fs = require('fs');

// This function takes words from txt file and converts them into an array.
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

const names2020 = fileReader('baby_names_2020_short.txt');
const names1880 = fileReader('baby_names_1880_short.txt');

// const longestNameLength = names2020.reduce((previousName, currentName) => {
// 	if (previousName.length <= currentName.length) {
// 		return currentName;
// 	} else {
// 		return previousName;
// 	}
// }).length;

// Two Loops

const longestNameLength1 = names2020.reduce((previousName, currentName) =>
	previousName.length >= currentName.length ? previousName : currentName
).length;

const longestNames2020 = names2020.filter(
	name => name.length === longestNameLength
);
console.log(longestNames2020);

// One loop

let longestNameLength = names2020[0].length;
let longestNameArr = [];

names2020.forEach(name => {
	if (name.length > longestNameLength) {
		longestNameLength = name.length;
		longestNameArr = [];
		longestNameArr.push(name);
	} else if (name.length === longestNameLength) {
		longestNameArr.push(name);
	}
});

console.log(longestNameArr);
