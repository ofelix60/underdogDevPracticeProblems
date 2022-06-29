// What movies on this list were distributed by DreamWorks?

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

function moviesBySpecifiedDistributor(arr, str) {
	return arr.filter(el => el.distributor === str);
}

console.log(moviesBySpecifiedDistributor(moviesObjArr, 'DreamWorks'));
