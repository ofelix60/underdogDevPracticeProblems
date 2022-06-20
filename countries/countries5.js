// There is at least one country name that contains another country name. Find all of these cases.

const fs = require('fs');
const countries = 'countries.txt';
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

countriesArr.forEach((country, i) => {
	for (let j = i + 1; j < countriesArr.length; j++) {
		if (
			country.includes(countriesArr[j]) ||
			countriesArr[j].includes(country)
		) {
			console.log([country, countriesArr[j]]);
		}
	}
});
