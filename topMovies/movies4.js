// What is the distribution of ratings? (How many are PG, PG-13, R, etc.?)

const fs = require('fs');

const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\r\n/);
};

const moviesObjArr = fileReader('top_movies.csv').map(el => {
	[
		filmTitle,
		distributor,
		releaseDate,
		domesticSales,
		globalSales,
		runtime,
		rating,
	] = el.split(/,(?=(?:(?:[^"']*"[^"']*")|(?:[^'"]*'[^'"]*'))*[^"']*$)/);
	return {
		filmTitle,
		distributor,
		releaseDate,
		domesticSales,
		globalSales,
		runtime,
		rating,
	};
});

function filmsByRatingTally(arr) {
	const frequencyCounter = {};
	for (let el of arr) {
		if (!(el.rating in frequencyCounter)) {
			frequencyCounter[el.rating] = 0;
		}
		frequencyCounter[el.rating] += 1;
	}
	console.log(frequencyCounter);
	return frequencyCounter;
}

filmsByRatingTally(moviesObjArr);
