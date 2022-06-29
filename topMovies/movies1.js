// What is the highest grossing moving from Universal Pictures, domestically?

const fs = require('fs');

const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\r\n/);
};

const moviesObjArr = fileReader('top_movies.csv').map(el => {
	[filmTitle, distributor, releaseDate, domesticSales, globalSales] = el.split(
		/,(?=(?:(?:[^"']*"[^"']*")|(?:[^'"]*'[^'"]*'))*[^"']*$)/
	);
	return { filmTitle, distributor, releaseDate, domesticSales, globalSales };
});

const universalHighestGrossing = moviesObjArr
	.filter(el => el.distributor === 'Universal Pictures')
	.reduce((previousNumber, currentNumber) =>
		+currentNumber.globalSales > previousNumber ? currentNumber : previousNumber
	);

console.log(universalHighestGrossing);
