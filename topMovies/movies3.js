// What is the earliest year on this list, and what were the films from that year?

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

function oldestMoviesOnList(arr) {
	let numberToBeat = arr[0].releaseDate;
	let oldestMovies = [];
	for (let el of arr) {
		if (el.releaseDate < numberToBeat) {
			numberToBeat = el.releaseDate;
			oldestMovies = [];
			oldestMovies.push(el.filmTitle);
		} else if (el.releaseDate === numberToBeat) {
			oldestMovies.push(el.filmTitle);
		}
	}
	return oldestMovies;
}

console.log(oldestMoviesOnList(moviesObjArr));
