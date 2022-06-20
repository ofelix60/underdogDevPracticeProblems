// What is the shortest country name? Make sure your solution can handle ties.

const fs = require('fs');
const countries = 'countries.txt';
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

let shortestLength = arr[0].length;
let shortestArr = [];

for (let i = 0; i < arr.length; i++) {
	if (arr[i].length < shortestLength) {
		shortestLength = arr[i].length;
		shortestArr = [];
		shortestArr.push(arr[i]);
	} else if (arr[i].length === shortestLength) {
		shortestArr.push(arr[i]);
	} else continue;
}
