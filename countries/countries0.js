// What are all the countries that have 'United in the name

const fs = require('fs');
const countries = 'countries.txt';
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

function unitedSearch(arr) {
	const result = [];
	arr.forEach(element => {
		if (element.includes('United')) {
			result.push(element);
		}
	});
	return result;
}
