// What distributor has the most films on this list?

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

function filmsByDistributorTally(arr) {
	const frequencyCounter = {};
	for (let el of arr) {
		if (!(el.distributor in frequencyCounter)) {
			frequencyCounter[el.distributor] = [0, []];
		}
		frequencyCounter[el.distributor][0] += 1;
		frequencyCounter[el.distributor][1].push(el);
	}
	return frequencyCounter;
}

function distributorWithMostFilms(obj) {
	let numberToBeat = 0;
	let container = [];
	return Object.entries(obj).reduce((previous, current) => {
		return current[1][0] > previous ? current : previous;
	});
}

console.log(distributorWithMostFilms(filmsByDistributorTally(moviesObjArr))[0]);
